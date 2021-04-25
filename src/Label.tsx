import { fade, makeStyles } from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import { BootstrapColor, bootstrapPalette } from "."

export interface LabelProps {
  color: BootstrapColor
  children: React.ReactNode
}

const useStyles = (color: BootstrapColor) =>
  makeStyles(theme => {
    const palette = bootstrapPalette(theme)
    const foreColor = palette[color].contrastText
    const backgroundColor =
      color === "light"
        ? fade(theme.palette.text.secondary, 0.1)
        : color === "dark"
        ? fade(theme.palette.text.primary, 0.85)
        : palette[color].main

    return {
      root: {
        display: "inline-block",
        padding: ".2em .4em",
        borderRadius: ".35rem",
        color: foreColor,
        backgroundColor,
      },
    }
  })

export function Label(props: LabelProps) {
  const classes = useStyles(props.color)()
  return <span className={clsx(classes.root)}>{props.children}</span>
}
