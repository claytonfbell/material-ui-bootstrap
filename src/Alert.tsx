/**
 * Emulates the bootstrap alert boxes
 */
import CloseIcon from "@mui/icons-material/Close"
import Box from "@mui/material/Box"
import Fade from "@mui/material/Fade"
import {
  alpha,
  darken,
  lighten,
  styled,
  Theme,
  useTheme,
} from "@mui/material/styles"
import { SxProps } from "@mui/system"
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
      : alpha(lighten(clr, 0.6), 0.8)
  const backgroundColor =
    color === "light"
      ? alpha(theme.palette.text.secondary, 0.035)
      : color === "dark"
      ? alpha(theme.palette.text.primary, 0.95)
      : alpha(lighten(clr, 0.8), 0.95)
  const headerColor =
    color === "light"
      ? alpha(theme.palette.text.primary, 0.9)
      : color === "dark"
      ? alpha(theme.palette.background.paper, 0.9)
      : darken(clr, 0.6)

  return { borderColor, backgroundColor, headerColor }
}

export interface AlertProps {
  children: React.ReactNode
  color?: BootstrapColor
  show?: boolean
  onClose?: () => void
  dismissible?: boolean
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false
}

/**
 * @deprecated MUI v5 has a better Alert component now!
 */
export function Alert(props: AlertProps) {
  const theme = useTheme()
  const htmlFontSize = theme.typography.htmlFontSize
  const coef = theme.typography.fontSize / 14
  const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`

  const { borderColor, backgroundColor, headerColor } = bootstrapAlertStyles(
    props.color || "danger",
    theme
  )

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

  let maxWidthClass: SxProps<Theme> | undefined
  switch (props.maxWidth) {
    case "xl":
      maxWidthClass = {
        [theme.breakpoints.up("xl")]: {
          maxWidth: theme.breakpoints.values.xl,
        },
      }
      break
    case "lg":
      maxWidthClass = {
        [theme.breakpoints.up("lg")]: {
          maxWidth: theme.breakpoints.values.lg,
        },
      }
      break
    case "md":
      maxWidthClass = {
        [theme.breakpoints.up("md")]: {
          maxWidth: theme.breakpoints.values.md,
        },
      }
      break
    case "sm":
      maxWidthClass = {
        [theme.breakpoints.up("sm")]: {
          maxWidth: theme.breakpoints.values.sm,
        },
      }
      break
    case "xs":
      maxWidthClass = {
        [theme.breakpoints.up("xs")]: {
          maxWidth: Math.max(theme.breakpoints.values.xs, 444),
        },
      }
      break
  }

  return (
    <Fade in={show} unmountOnExit>
      <Box
        sx={{
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
          ...maxWidthClass,
        }}
      >
        {props.dismissible && (
          <CloseIcon
            onClick={handleDismiss}
            sx={{
              fontSize: pxToRem(18),
              right: 12,
              position: "absolute",
              cursor: "pointer",
              "&:hover": {
                color: "#333",
              },
            }}
            color="inherit"
          />
        )}
        <Typography color="inherit">{props.children}</Typography>
      </Box>
    </Fade>
  )
}

const StyledSpan = styled("span")``

export interface AlertHeadingProps {
  children: React.ReactNode
  icon?: React.ReactNode
}
function Heading(props: AlertHeadingProps) {
  return (
    <Typography color="inherit" variant="h5" component="h2">
      {props.icon && (
        <StyledSpan
          sx={{
            marginRight: 10,
            verticalAlign: -6,
            "& > *:first-child": {
              fontSize: 32,
            },
          }}
        >
          {props.icon}
        </StyledSpan>
      )}
      {props.children}
    </Typography>
  )
}

Alert.Heading = Heading
