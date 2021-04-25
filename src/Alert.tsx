/**
 * Emulates the bootstrap alert boxes
 */
import { Theme } from "@material-ui/core"
import Fade from "@material-ui/core/Fade"
import {
  darken,
  fade,
  lighten,
} from "@material-ui/core/styles/colorManipulator"
import makeStyles from "@material-ui/core/styles/makeStyles"
import CloseIcon from "@material-ui/icons/Close"
import clsx from "clsx"
import React from "react"
import { BootstrapColor, bootstrapPalette } from "./bootstrapColors"
import { Typography } from "./Typography"

export function bootstrapAlertStyles(color: BootstrapColor, theme: Theme) {
  const palette = bootstrapPalette(theme)
  const clr =
    color === "light"
      ? theme.palette.text.secondary
      : color === "dark"
      ? theme.palette.text.primary
      : palette[color].main
  const borderColor =
    color === "light" || color === "dark"
      ? theme.palette.divider
      : fade(lighten(clr, 0.6), 0.8)
  const backgroundColor =
    color === "light"
      ? fade(theme.palette.text.secondary, 0.035)
      : color === "dark"
      ? fade(theme.palette.text.primary, 0.95)
      : fade(lighten(clr, 0.8), 0.95)
  const headerColor =
    color === "light"
      ? fade(theme.palette.text.primary, 0.9)
      : color === "dark"
      ? fade(theme.palette.background.paper, 0.9)
      : darken(clr, 0.6)

  return { borderColor, backgroundColor, headerColor }
}

const useStyles = (color: BootstrapColor) =>
  makeStyles(theme => {
    // @ts-ignore
    const htmlFontSize = theme.typography.htmlFontSize
    const coef = theme.typography.fontSize / 14
    const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`

    const { borderColor, backgroundColor, headerColor } = bootstrapAlertStyles(
      color,
      theme
    )

    return {
      root: {
        color: headerColor,
        backgroundColor,
        borderColor,
        position: "relative",
        border: "1px solid",
        padding: `${pxToRem(12)} ${pxToRem(14)}`,
        paddingRight: `${pxToRem(28)}`,
        borderRadius: pxToRem(4),
        "& a": {
          color: headerColor,
        },
        "& p": {
          margin: 0,
        },
      },

      closeIcon: {
        fontSize: pxToRem(18),
        right: 12,
        position: "absolute",
        cursor: "pointer",
        "&:hover": {
          color: "#333",
        },
      },
      /* Styles applied to the root element if `maxWidth="xs"`. */
      maxWidthXs: {
        [theme.breakpoints.up("xs")]: {
          maxWidth: Math.max(theme.breakpoints.values.xs, 444),
        },
      },
      /* Styles applied to the root element if `maxWidth="sm"`. */
      maxWidthSm: {
        [theme.breakpoints.up("sm")]: {
          maxWidth: theme.breakpoints.values.sm,
        },
      },
      /* Styles applied to the root element if `maxWidth="md"`. */
      maxWidthMd: {
        [theme.breakpoints.up("md")]: {
          maxWidth: theme.breakpoints.values.md,
        },
      },
      /* Styles applied to the root element if `maxWidth="lg"`. */
      maxWidthLg: {
        [theme.breakpoints.up("lg")]: {
          maxWidth: theme.breakpoints.values.lg,
        },
      },
      /* Styles applied to the root element if `maxWidth="xl"`. */
      maxWidthXl: {
        [theme.breakpoints.up("xl")]: {
          maxWidth: theme.breakpoints.values.xl,
        },
      },
    }
  })

export interface AlertProps {
  children: React.ReactNode
  color?: BootstrapColor
  show?: boolean
  onClose?: () => void
  dismissible?: boolean
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false
}

export function Alert(props: AlertProps) {
  const classes = useStyles(props.color || "danger")(props)
  const [show, setShow] = React.useState<boolean>(true)

  React.useEffect(() => {
    if (props.show !== undefined) {
      setShow(props.show)
    }
  }, [props.show])

  function handleDismiss() {
    setShow(false)
    if (props.onClose !== undefined) {
      props.onClose()
    }
  }

  let maxWidthClass = classes.maxWidthMd
  switch (props.maxWidth) {
    case "xl":
      maxWidthClass = classes.maxWidthXl
      break
    case "lg":
      maxWidthClass = classes.maxWidthLg
      break
    case "md":
      maxWidthClass = classes.maxWidthMd
      break
    case "sm":
      maxWidthClass = classes.maxWidthSm
      break
    case "xs":
      maxWidthClass = classes.maxWidthXs
      break
  }

  return (
    <Fade in={show} unmountOnExit>
      <div className={clsx(classes.root, maxWidthClass)}>
        {props.dismissible && (
          <CloseIcon
            onClick={handleDismiss}
            className={classes.closeIcon}
            color="inherit"
          />
        )}
        <Typography color="inherit">{props.children}</Typography>
      </div>
    </Fade>
  )
}

const useStylesForHeading = makeStyles({
  icon: {
    marginRight: 10,
    verticalAlign: -6,
    "& > *:first-child": {
      fontSize: 32,
    },
  },
})

export interface AlertHeadingProps {
  children: React.ReactNode
  icon?: React.ReactNode
}
function Heading(props: AlertHeadingProps) {
  const classes = useStylesForHeading()
  return (
    <Typography color="inherit" variant="h5" component="h2">
      {props.icon && <span className={classes.icon}>{props.icon}</span>}
      {props.children}
    </Typography>
  )
}

Alert.Heading = Heading
