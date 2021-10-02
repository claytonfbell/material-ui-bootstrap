import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import React, { useContext } from "react"
import { BootstrapColor } from "."
import { bootstrapAlertStyles } from "./Alert"

const PanelContext = React.createContext<BootstrapColor>("primary")

export interface PanelProps {
  children: React.ReactNode
  color: BootstrapColor
}

export function Panel(props: PanelProps) {
  const theme = useTheme()
  const { borderColor } = bootstrapAlertStyles(props.color, theme)

  return (
    <Box
      sx={{
        overflow: "hidden",
        borderRadius: 1,
        border: `1px solid ${borderColor}`,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <PanelContext.Provider value={props.color}>
        {props.children}
      </PanelContext.Provider>
    </Box>
  )
}

export interface PanelHeaderProps {
  children: React.ReactNode
}
export function PanelHeader(props: PanelHeaderProps) {
  const color = useContext(PanelContext)
  const theme = useTheme()
  const { borderColor, backgroundColor, headerColor } = bootstrapAlertStyles(
    color,
    theme
  )

  return (
    <Box
      sx={{
        borderBottom: `1px solid ${borderColor}`,
        backgroundColor,
        color: headerColor,
        padding: `10px 15px`,
      }}
    >
      {props.children}
    </Box>
  )
}

export interface PanelBodyProps {
  children: React.ReactNode
}
export function PanelBody(props: PanelBodyProps) {
  return <Box padding={2}>{props.children}</Box>
}
