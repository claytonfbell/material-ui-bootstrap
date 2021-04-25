import MUICard, { CardProps as MUICardProps } from "@material-ui/core/Card"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { fade, lighten } from "@material-ui/core/styles/colorManipulator"
import React from "react"
import { BootstrapColor, bootstrapPalette } from "./bootstrapColors"
import { Typography } from "./Typography"
export { default as CardActionArea } from "@material-ui/core/CardActionArea"
export { default as CardActions } from "@material-ui/core/CardActions"
export { default as CardContent } from "@material-ui/core/CardContent"
export { default as CardMedia } from "@material-ui/core/CardMedia"

const useStyles = (color: BootstrapColor) =>
  makeStyles((theme: Theme) => {
    const palette = bootstrapPalette(theme)
    const backgroundColor = lighten(palette[color].main, 0.3)
    const foreColor = palette[color].contrastText
    return {
      root: {
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
      },
    }
  })

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type CardProps = Omit<MUICardProps, "color"> & {
  color?: BootstrapColor
}

export const Card = React.forwardRef(function BootstrapButton(
  props: CardProps,
  ref: any
) {
  const classes = useStyles(props.color || "light")(props)
  const { color, ...otherProps } = props

  return (
    <MUICard {...otherProps} classes={classes} ref={ref} variant="outlined" />
  )
})

export interface CardHeaderProps {
  children: React.ReactNode
}

export function CardHeader(props: CardHeaderProps) {
  const classes = makeStyles((theme: Theme) => ({
    root: {
      padding: `10px 14px 10px 14px`,
      backgroundColor: fade("#000", 0.1),
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  }))()
  return (
    <div className={classes.root}>
      <Typography color="inherit">{props.children}</Typography>
    </div>
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
