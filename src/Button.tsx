import { darken, fade, lighten, Theme } from "@material-ui/core"
import MUIButton, { ButtonProps } from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles/"
import React from "react"
import { BootstrapColor } from "./Alert"

const useStyles = makeStyles((theme: Theme) => {
  const bootstrapColors: {
    [key in BootstrapColor]: {
      contrastText: string
      main: string
    }
  } = {
    primary: {
      contrastText: theme.palette.primary.contrastText,
      main: theme.palette.primary.main,
    },
    secondary: {
      contrastText: theme.palette.secondary.contrastText,
      main: theme.palette.secondary.main,
    },
    success: {
      contrastText: "#fff",
      main: "#218838",
    },
    danger: {
      contrastText: "#fff",
      main: "#c82333",
    },
    warning: {
      contrastText: "#333",
      main: "#e0a800",
    },
    info: {
      contrastText: "#fff",
      main: "#138496",
    },
    light: {
      contrastText: theme.palette.text.secondary,
      main: theme.palette.background.paper,
    },
    dark: {
      contrastText: theme.palette.background.paper,
      main: theme.palette.text.primary,
    },
  }

  function getColor(x: Props) {
    return bootstrapColors[x.color === undefined ? "dark" : x.color]
  }

  return {
    root: {
      textTransform: "none",
      boxShadow: "none",
      borderRadius: ".25rem",
      padding: ".375rem .75rem",
      fontSize: "1rem",
      lineHeight: "1.5",
      "&.Mui-disabled": {
        opacity: 0.3,
      },
      "&.MuiButton-contained": {
        color: (x: Props) => getColor(x).contrastText,
        backgroundColor: (x: Props) => getColor(x).main,
        border: (x: Props) =>
          `1px solid ${fade(darken(getColor(x).main, 0.3), 0.3)}`,
        "&:hover": {
          backgroundColor: (x: Props) => darken(getColor(x).main, 0.25),
        },
      },
      "&.MuiButton-outlined,&.MuiButton-text": {
        color: (x: Props) =>
          x.color === "light" ? getColor(x).contrastText : getColor(x).main,
        borderColor: (x: Props) =>
          x.color === "light"
            ? fade(darken(getColor(x).main, 0.3), 0.3)
            : getColor(x).main,
        "&:hover": {
          backgroundColor: (x: Props) =>
            x.color === "light"
              ? fade(lighten(getColor(x).contrastText, 0.2), 0.15)
              : fade(lighten(getColor(x).main, 0.2), 0.15),
          borderColor: (x: Props) =>
            x.color === "light"
              ? lighten(getColor(x).contrastText, 0.5)
              : lighten(getColor(x).main, 0.5),
          color: (x: Props) =>
            x.color === "light"
              ? lighten(getColor(x).contrastText, 0.3)
              : lighten(getColor(x).main, 0.3),
        },
      },
      "&:hover": {
        boxShadow: "none",
      },
    },
  }
})

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Props = Omit<ButtonProps, "color"> & {
  color?: BootstrapColor
  component?: any
  to?: string
}

const Button = React.forwardRef(function BootstrapButton(
  props: Props,
  ref: any
) {
  const classes = useStyles(props)
  const { color, ...otherProps } = props

  return <MUIButton {...otherProps} classes={classes} ref={ref} />
})
export default Button
