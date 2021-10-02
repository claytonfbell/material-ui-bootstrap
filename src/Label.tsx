import { alpha, styled, useTheme } from "@mui/material/styles"
import React from "react"
import { BootstrapColor, bootstrapPalette } from "."

export interface LabelProps {
  color: BootstrapColor
  children: React.ReactNode
}

const StyledSpan = styled("span")``

export function Label(props: LabelProps) {
  const theme = useTheme()
  const palette = bootstrapPalette(theme)
  const foreColor = palette[props.color].contrastText
  const backgroundColor =
    props.color === "light"
      ? alpha(theme.palette.text.secondary, 0.1)
      : props.color === "dark"
      ? alpha(theme.palette.text.primary, 0.85)
      : palette[props.color].main

  return (
    <StyledSpan
      sx={{
        display: "inline-block",
        padding: ".2em .4em",
        borderRadius: ".35rem",
        color: foreColor,
        backgroundColor,
      }}
    >
      {props.children}
    </StyledSpan>
  )
}
