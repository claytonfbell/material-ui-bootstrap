import { Theme } from "@material-ui/core/styles"
import MUITypography, { TypographyProps } from "@material-ui/core/Typography"
import makeStyles from "@material-ui/styles/makeStyles"
import React from "react"
import { BootstrapColor } from "./Alert"

const useStyles = makeStyles((theme: Theme) => {
  const bootstrapColors: {
    [key in BootstrapColor]: {
      color: string
    }
  } = {
    primary: {
      color: theme.palette.primary.dark,
    },
    secondary: {
      color: theme.palette.secondary.dark,
    },
    success: {
      color: "#155724",
    },
    danger: {
      color: "#721c24",
    },
    warning: {
      color: "#856404",
    },
    info: {
      color: "#0c5460",
    },
    light: {
      color: theme.palette.text.secondary,
    },
    dark: {
      color: theme.palette.text.primary,
    },
  }

  function getColor(x: Props) {
    return x.color === "inherit"
      ? { color: undefined }
      : bootstrapColors[x.color === undefined ? "dark" : x.color]
  }

  return {
    root: {
      color: (x: Props) => getColor(x).color,
      "& a": {
        color: (x: Props) => getColor(x).color,
        fontWeight: "bolder",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  }
})

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

type Props = Omit<TypographyProps, "color"> & {
  color?: BootstrapColor | "inherit"
  component?: any
}

const Typography = React.forwardRef(function BootstrapButton(
  props: Props,
  ref: any
) {
  const classes = useStyles(props)
  const { color, ...otherProps } = props

  return <MUITypography {...otherProps} classes={classes} ref={ref} />
})
export default Typography
