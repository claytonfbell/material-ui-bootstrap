import Box from "@mui/material/Box"
import MUICard, { CardProps as MUICardProps } from "@mui/material/Card"
import { alpha, lighten, useTheme } from "@mui/material/styles"
import React from "react"
import { BootstrapColor, bootstrapPalette } from "./bootstrapColors"
import { Typography } from "./Typography"
export { default as CardActionArea } from "@mui/material/CardActionArea"
export { default as CardActions } from "@mui/material/CardActions"
export { default as CardContent } from "@mui/material/CardContent"
export { default as CardMedia } from "@mui/material/CardMedia"

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type CardProps = Omit<MUICardProps, "color"> & {
  color?: BootstrapColor
}

export const Card = React.forwardRef(function BootstrapButton(
  props: CardProps,
  ref: any
) {
  const { color, ...otherProps } = props
  const theme = useTheme()
  const palette = bootstrapPalette(theme)
  const backgroundColor = lighten(palette[color || "light"].main, 0.3)
  const foreColor = palette[color || "light"].contrastText

  return (
    <MUICard
      {...otherProps}
      sx={{
        backgroundColor,
        color: foreColor,
        "& a": {
          color: foreColor,
          fontWeight: "bolder",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      }}
      ref={ref}
      variant="outlined"
    />
  )
})

export interface CardHeaderProps {
  children: React.ReactNode
}

export function CardHeader(props: CardHeaderProps) {
  const theme = useTheme()
  return (
    <Box
      sx={{
        padding: `10px 14px 10px 14px`,
        backgroundColor: alpha("#000", 0.1),
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography color="inherit">{props.children}</Typography>
    </Box>
  )
}

export interface CardTitleProps {
  children: React.ReactNode
}
export function CardTitle(props: CardTitleProps) {
  return (
    <Typography color="inherit" variant="h5" component="h2">
      {props.children}
    </Typography>
  )
}
