import { styled } from "@mui/material/styles"
import MUITooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip"
import React from "react"

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MUITooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontWeight: theme.typography.body1.fontWeight,
    fontSize: theme.typography.body1.fontSize,
  },
}))
