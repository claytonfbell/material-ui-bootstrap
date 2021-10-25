import MUIButton, { ButtonProps as MUIButtonProps } from "@mui/material/Button"
import { alpha, darken, lighten, useTheme } from "@mui/material/styles"
import React from "react"
import { bootstrapPalette } from "."
import { BootstrapColor } from "./bootstrapColors"

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type ButtonProps = Omit<MUIButtonProps, "color"> & {
  color?: BootstrapColor
  component?: any
  to?: string
  target?: string
  uppercase?: boolean
  boxShadow?: boolean
}

/**
 * @deprecated MUI v5 Button supports success, error, info, and warning colors, you can style the rest in your theme.
 */
export const Button = React.forwardRef(function BootstrapButton(
  props: ButtonProps,
  ref: any
) {
  //   const classes = useStyles(props)
  const { color, uppercase, boxShadow, ...otherProps } = props

  const theme = useTheme()
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

  return (
    <MUIButton
      {...otherProps}
      sx={{
        textTransform: uppercase === true ? undefined : "none",
        boxShadow: boxShadow === true ? undefined : "none",
        "&.Mui-disabled": {
          opacity: 0.3,
        },
        "&.MuiButton-contained": {
          color: getColor(props).contrastText,
          backgroundColor: getColor(props).main,
          "&:hover": {
            backgroundColor: darken(getColor(props).main, 0.25),
          },
        },

        "&.MuiButton-outlined,&.MuiButton-text": {
          color:
            props.color === "light"
              ? getColor(props).contrastText
              : getColor(props).main,
          borderColor:
            props.color === "light"
              ? alpha(darken(getColor(props).main, 0.3), 0.3)
              : getColor(props).main,
          "&:hover": {
            backgroundColor:
              props.color === "light"
                ? alpha(lighten(getColor(props).contrastText, 0.2), 0.15)
                : alpha(lighten(getColor(props).main, 0.2), 0.15),
            borderColor:
              props.color === "light"
                ? lighten(getColor(props).contrastText, 0.5)
                : lighten(getColor(props).main, 0.5),
            color:
              props.color === "light"
                ? lighten(getColor(props).contrastText, 0.3)
                : lighten(getColor(props).main, 0.3),
          },
        },
        "&:hover": {
          boxShadow: "none",
        },
      }}
      ref={ref}
    />
  )
})
Button.defaultProps = {
  size: "medium",
  color: "dark",
}

Button.defaultProps = {
  uppercase: false,
  boxShadow: false,
}
