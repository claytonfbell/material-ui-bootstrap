import MUIButton, {
  ButtonProps as MUIButtonProps,
} from "@material-ui/core/Button"
import { makeStyles, Theme } from "@material-ui/core/styles"
import {
  darken,
  fade,
  lighten,
} from "@material-ui/core/styles/colorManipulator"
import React from "react"
import { bootstrapPalette } from "."
import { BootstrapColor } from "./bootstrapColors"

const useStyles = makeStyles((theme: Theme) => {
  const bootstrapColors: {
    [key in BootstrapColor]: {
      contrastText: string
      main: string
    }
  } = {
    ...bootstrapPalette(theme),
  }

  function getColor(x: ButtonProps) {
    return bootstrapColors[x.color === undefined ? "dark" : x.color]
  }

  return {
    root: {
      textTransform: (props: ButtonProps) =>
        props.uppercase === true ? undefined : "none",
      boxShadow: (props: ButtonProps) =>
        props.boxShadow === true ? undefined : "none",
      "&.Mui-disabled": {
        opacity: 0.3,
      },
      "&.MuiButton-contained": {
        color: (x: ButtonProps) => getColor(x).contrastText,
        backgroundColor: (x: ButtonProps) => getColor(x).main,
        "&:hover": {
          backgroundColor: (x: ButtonProps) => darken(getColor(x).main, 0.25),
        },
      },
      "&.MuiButton-outlined,&.MuiButton-text": {
        color: (x: ButtonProps) =>
          x.color === "light" ? getColor(x).contrastText : getColor(x).main,
        borderColor: (x: ButtonProps) =>
          x.color === "light"
            ? fade(darken(getColor(x).main, 0.3), 0.3)
            : getColor(x).main,
        "&:hover": {
          backgroundColor: (x: ButtonProps) =>
            x.color === "light"
              ? fade(lighten(getColor(x).contrastText, 0.2), 0.15)
              : fade(lighten(getColor(x).main, 0.2), 0.15),
          borderColor: (x: ButtonProps) =>
            x.color === "light"
              ? lighten(getColor(x).contrastText, 0.5)
              : lighten(getColor(x).main, 0.5),
          color: (x: ButtonProps) =>
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

export type ButtonProps = Omit<MUIButtonProps, "color"> & {
  color?: BootstrapColor
  component?: any
  to?: string
  target?: string
  uppercase?: boolean
  boxShadow?: boolean
}

export const Button = React.forwardRef(function BootstrapButton(
  props: ButtonProps,
  ref: any
) {
  const classes = useStyles(props)
  const { color, ...otherProps } = props

  return <MUIButton {...otherProps} classes={classes} ref={ref} />
})
Button.defaultProps = {
  size: "medium",
  color: "dark",
}

Button.defaultProps = {
  uppercase: false,
  boxShadow: false,
}
