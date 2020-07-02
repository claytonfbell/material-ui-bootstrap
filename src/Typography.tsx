import { Theme } from "@material-ui/core/styles"
import MUITypography, {
  TypographyProps as MUITypographyProps,
} from "@material-ui/core/Typography"
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
      color: theme.palette.primary.main,
    },
    secondary: {
      color: theme.palette.secondary.main,
    },
    success: {
      color: "#218838",
    },
    danger: {
      color: "#c82333",
    },
    warning: {
      color: "#e0a800",
    },
    info: {
      color: "#138496",
    },
    light: {
      color: theme.palette.text.secondary,
    },
    dark: {
      color: theme.palette.text.primary,
    },
  }

  function getColor(x: TypographyProps) {
    return x.color === "inherit"
      ? { color: undefined }
      : bootstrapColors[x.color === undefined ? "dark" : x.color]
  }

  return {
    root: {
      color: (x: TypographyProps) => getColor(x).color,
      "& a": {
        color: (x: TypographyProps) => getColor(x).color,
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

export type TypographyProps = Omit<MUITypographyProps, "color"> & {
  color?: BootstrapColor | "inherit"
  component?: any
}

const Typography = React.forwardRef(function BootstrapButton(
  props: TypographyProps,
  ref: any
) {
  const classes = useStyles(props)
  const { color, ...otherProps } = props

  return <MUITypography {...otherProps} classes={classes} ref={ref} />
})
export default Typography
