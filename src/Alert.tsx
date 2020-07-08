/**
 * Emulates the bootstrap alert boxes
 */
import Fade from "@material-ui/core/Fade"
import { fade, lighten } from "@material-ui/core/styles/colorManipulator"
import makeStyles from "@material-ui/core/styles/makeStyles"
import CloseIcon from "@material-ui/icons/Close"
import React from "react"
import { BootstrapColor } from "./bootstrapColors"
import Typography from "./Typography"

const useStyles = makeStyles((theme) => {
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
      padding: ".75rem 1.25rem",
      borderRadius: ".25rem",
      width: "100%",
      "& a": {
        color: (x: AlertProps) => getColor(x).color,
      },
    },
    closeIcon: {
      right: 12,
      position: "absolute",
      cursor: "pointer",
      "&:hover": {
        color: "#333",
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
}

function Alert(props: AlertProps) {
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

  return (
    <Fade in={show} unmountOnExit>
      <div className={classes.root}>
        {props.dismissible && (
          <CloseIcon
            onClick={handleDismiss}
            className={classes.closeIcon}
            fontSize="inherit"
            color="inherit"
          />
        )}
        <Typography color="inherit">{props.children}</Typography>
      </div>
    </Fade>
  )
}

export interface AlertHeadingProps {
  children: React.ReactNode
}
function Heading(props: AlertHeadingProps) {
  return (
    <Typography color="inherit" variant="h5" component="h2">
      {props.children}
    </Typography>
  )
}

Alert.Heading = Heading
export default Alert
