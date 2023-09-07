import { styled, useTheme } from "@mui/material/styles"
import React from "react"
import { BootstrapColor } from "."

export interface LabelProps {
  color: BootstrapColor
  children: React.ReactNode
}

const StyledSpan = styled("span")``

export function Label(props: LabelProps) {
  const theme = useTheme()
  const foreColor = theme.palette[props.color].contrastText
  const backgroundColor = theme.palette[props.color].main

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
