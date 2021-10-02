import MUITypography, {
  TypographyProps as MUITypographyProps,
} from "@mui/material/Typography"
import useTheme from "@mui/system/useTheme"
import React from "react"
import { BootstrapColor } from "./bootstrapColors"

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type TypographyProps = Omit<MUITypographyProps, "color"> & {
  color?: BootstrapColor | "inherit"
  component?: any
}

export const Typography = React.forwardRef(function BootstrapButton(
  props: TypographyProps,
  ref: any
) {
  const { color, ...otherProps } = props
  const theme = useTheme()
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

  const colorProp =
    color === "inherit"
      ? { color: undefined }
      : bootstrapColors[color === undefined ? "dark" : color]

  return (
    <MUITypography
      {...otherProps}
      sx={{
        color: colorProp,
        "& a": {
          color: colorProp.color,
          fontWeight: "bolder",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      }}
      ref={ref}
    />
  )
})
