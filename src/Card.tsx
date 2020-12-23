import MUICard, { CardProps as MUICardProps } from "@material-ui/core/Card"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { fade } from "@material-ui/core/styles/colorManipulator"
import React from "react"
import { BootstrapColor } from "./bootstrapColors"
import Typography from "./Typography"
export { default as CardActionArea } from "@material-ui/core/CardActionArea"
export { default as CardActions } from "@material-ui/core/CardActions"
export { default as CardContent } from "@material-ui/core/CardContent"
export { default as CardMedia } from "@material-ui/core/CardMedia"

const useStyles = makeStyles((theme: Theme) => {
  const bootstrapColors: {
    [key in BootstrapColor]: {
      backgroundColor: string
      color: string
    }
  } = {
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
    },
    success: {
      backgroundColor: "#218838",
      color: "#fff",
    },
    danger: {
      backgroundColor: "#c82333",
      color: "#fff",
    },
    warning: {
      backgroundColor: "#e0a800",
      color: "#fff",
    },
    info: {
      backgroundColor: "#138496",
      color: "#fff",
    },
    light: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
    dark: {
      backgroundColor: fade(theme.palette.text.primary, 0.7),
      color: theme.palette.background.default,
    },
  }

  function getColor(x: CardProps) {
    return bootstrapColors[x.color === undefined ? "light" : x.color]
  }

  return {
    root: {
      backgroundColor: (x: CardProps) => getColor(x).backgroundColor,
      color: (x: CardProps) => getColor(x).color,
      "& a": {
        color: (x: CardProps) => getColor(x).backgroundColor,
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
  //   component?: any
}

const Card = React.forwardRef(function BootstrapButton(
  props: CardProps,
  ref: any
) {
  const classes = useStyles(props)
  const { color, ...otherProps } = props

  return (
    <MUICard {...otherProps} classes={classes} ref={ref} variant="outlined" />
  )
})
export default Card

export interface CardHeaderProps {
  children: React.ReactNode
}

export function CardHeader(props: CardHeaderProps) {
  const classes = makeStyles((theme: Theme) => ({
    root: {
      padding: `10px 14px 10px 14px`,
      backgroundColor: fade("#000", 0.04),
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
