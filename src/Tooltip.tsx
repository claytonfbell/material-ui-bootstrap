import {
  lighten,
  makeStyles,
  Theme,
  Tooltip as MUITooltip,
  TooltipProps,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme: Theme) => {
  const backgroundColor = lighten(theme.palette.common.black, 0.15)
  return {
    arrow: {
      color: backgroundColor,
    },
    tooltip: {
      fontWeight: theme.typography.body1.fontWeight,
      fontSize: theme.typography.body1.fontSize,
      backgroundColor,
    },
  }
})

export const Tooltip = React.forwardRef<JSX.Element, TooltipProps>(
  (props, ref) => {
    const classes = useStyles()
    return <MUITooltip ref={ref} {...props} arrow classes={classes} />
  }
)
