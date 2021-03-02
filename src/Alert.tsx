/**
 * Emulates the bootstrap alert boxes
 */
import Fade from "@material-ui/core/Fade"
import { fade, lighten } from "@material-ui/core/styles/colorManipulator"
import makeStyles from "@material-ui/core/styles/makeStyles"
import CloseIcon from "@material-ui/icons/Close"
import clsx from "clsx"
import React from "react"
import { BootstrapColor } from "./bootstrapColors"
import { Typography } from "./Typography"

const useStyles = makeStyles(theme => {
  // @ts-ignore
  const htmlFontSize = theme.typography.htmlFontSize
  const coef = theme.typography.fontSize / 14
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`

  const bootstrapColors: {
    [key in BootstrapColor]: {
      color: string
      backgroundColor: string
      borderColor: string
    }
  } = {
    primary: {
      color: theme.palette.primary.dark,
      backgroundColor: fade(lighten(theme.palette.primary.light, 0.7), 0.8),
      borderColor: fade(lighten(theme.palette.primary.light, 0.5), 0.8),
    },
    secondary: {
      color: theme.palette.secondary.dark,
      backgroundColor: fade(lighten(theme.palette.secondary.light, 0.7), 0.8),
      borderColor: fade(lighten(theme.palette.secondary.light, 0.5), 0.8),
    },
    success: {
      color: "#155724",
      backgroundColor: fade("#d4edda", 0.8),
      borderColor: fade("#c3e6cb", 0.8),
    },
    danger: {
      color: "#721c24",
      backgroundColor: fade("#f8d7da", 0.8),
      borderColor: fade("#f5c6cb", 0.8),
    },
    warning: {
      color: "#856404",
      backgroundColor: fade("#fff3cd", 0.8),
      borderColor: fade("#ffeeba", 0.8),
    },
    info: {
      color: "#0c5460",
      backgroundColor: fade("#d1ecf1", 0.8),
      borderColor: fade("#bee5eb", 0.8),
    },
    light: {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.paper,
      borderColor: fade(theme.palette.text.secondary, 0.1),
    },
    dark: {
      color: theme.palette.text.primary,
      backgroundColor: fade(theme.palette.text.primary, 0.25),
      borderColor: fade(theme.palette.text.primary, 0.2),
    },
  }

  function getColor(x: AlertProps) {
    return bootstrapColors[x.color === undefined ? "danger" : x.color]
  }

  return {
    root: {
      color: (x: AlertProps) => getColor(x).color,
      backgroundColor: (x: AlertProps) => getColor(x).backgroundColor,
      borderColor: (x: AlertProps) => getColor(x).borderColor,
      position: "relative",
      border: "1px solid",
      padding: `${pxToRem(12)} ${pxToRem(14)}`,
      paddingRight: `${pxToRem(28)}`,
      borderRadius: pxToRem(4),
      "& a": {
        color: (x: AlertProps) => getColor(x).color,
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
  const classes = useStyles(props)
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
