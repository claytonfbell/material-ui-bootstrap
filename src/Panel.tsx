import Box from "@mui/material/Box"
import { Theme, alpha, darken, lighten, useTheme } from "@mui/material/styles"
import React, { useContext } from "react"
import { BootstrapColor, bootstrapPalette } from "./bootstrapColors"

export function bootstrapAlertStyles(color: BootstrapColor, theme: Theme) {
  const palette = bootstrapPalette(theme)
  const clr =
    color === "light"
      ? theme.palette.text.secondary
      : color === "dark"
      ? theme.palette.text.primary
      : palette[color].main
  const borderColor =
    color === "light" || color === "dark"
      ? theme.palette.divider
      : alpha(lighten(clr, 0.6), 0.8)
  const backgroundColor =
    color === "light"
      ? alpha(theme.palette.text.secondary, 0.035)
      : color === "dark"
      ? alpha(theme.palette.text.primary, 0.95)
      : alpha(lighten(clr, 0.8), 0.95)
  const headerColor =
    color === "light"
      ? alpha(theme.palette.text.primary, 0.9)
      : color === "dark"
      ? alpha(theme.palette.background.paper, 0.9)
      : darken(clr, 0.6)

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
