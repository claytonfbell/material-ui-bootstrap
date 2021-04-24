import { makeStyles } from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import { BootstrapColor, bootstrapPalette } from "."

export interface LabelProps {
  color: BootstrapColor
  children: React.ReactNode
}

const useStyles = makeStyles(theme => {
  const palette = bootstrapPalette(theme)
  return {
    root: {
      display: "inline-block",
      padding: ".25em .4em",
      borderRadius: ".25rem",
      color: (x: LabelProps) => palette[x.color].contrastText,
      backgroundColor: (x: LabelProps) => palette[x.color].main,
    },
  }
})

export function Label(props: LabelProps) {
  const classes = useStyles(props)
  return <div className={clsx(classes.root)}>{props.children}</div>
}
