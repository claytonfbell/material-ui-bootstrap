import Box from "@mui/material/Box"
import { Theme, alpha, darken, lighten, useTheme } from "@mui/material/styles"
import React, { useContext } from "react"
import { BootstrapColor } from "./bootstrapColors"

export function bootstrapAlertStyles(color: BootstrapColor, theme: Theme) {
  const clr = theme.palette[color].main
  const borderColor = alpha(lighten(clr, 0.6), 0.8)
  const backgroundColor = alpha(lighten(clr, 0.8), 0.95)
  const headerColor = darken(clr, 0.6)

  return { borderColor, backgroundColor, headerColor }
}

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
