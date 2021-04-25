import { makeStyles } from "@material-ui/core"
import React, { useContext } from "react"
import { BootstrapColor } from "."
import { bootstrapAlertStyles } from "./Alert"

const PanelContext = React.createContext<BootstrapColor>("primary")

const useStyles = (color: BootstrapColor) =>
  makeStyles(theme => {
    const { borderColor, backgroundColor, headerColor } = bootstrapAlertStyles(
      color,
      theme
    )

    return {
      root: {
        overflow: "hidden",
        borderRadius: 4,
        border: `1px solid ${borderColor}`,
        backgroundColor: theme.palette.background.paper,
      },
      header: {
        borderBottom: `1px solid ${borderColor}`,
        backgroundColor,
        color: headerColor,
        padding: `10px 15px`,
      },
      body: {
        padding: 15,
      },
    }
  })

export interface PanelProps {
  children: React.ReactNode
  color: BootstrapColor
}

export function Panel(props: PanelProps) {
  const classes = useStyles(props.color)()

  return (
    <div className={classes.root}>
      <PanelContext.Provider value={props.color}>
        {props.children}
      </PanelContext.Provider>
    </div>
  )
}

export interface PanelHeaderProps {
  children: React.ReactNode
}
export function PanelHeader(props: PanelHeaderProps) {
  const color = useContext(PanelContext)
  const classes = useStyles(color)()
  return <div className={classes.header}>{props.children}</div>
}

export interface PanelBodyProps {
  children: React.ReactNode
}
export function PanelBody(props: PanelBodyProps) {
  const color = useContext(PanelContext)
  const classes = useStyles(color)()
  return <div className={classes.body}>{props.children}</div>
}
