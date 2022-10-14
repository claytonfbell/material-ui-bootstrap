import Paper from "@mui/material/Paper"
import { alpha, useTheme } from "@mui/material/styles"
import MuiTab, { TabProps as MuiTabProps } from "@mui/material/Tab"
import MuiTabs, { TabsProps as MuiTabsProps } from "@mui/material/Tabs"
import * as React from "react"

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type TabsProps = Omit<
  MuiTabsProps,
  "children" | "value" | "onSelect" | "onChange"
> & {
  selectedIndex: number
  onSelect: (newValue: number) => void
  children: React.ReactNode
  tabs: (MuiTabProps | string)[]
}

export const Tabs = React.forwardRef(function(
  { tabs, children, selectedIndex, onSelect: onSelect, ...props }: TabsProps,
  ref: any
) {
  const theme = useTheme()

  return (
    <>
      <MuiTabs
        ref={ref}
        {...props}
        value={selectedIndex}
        onChange={(_e, value) => onSelect(value)}
        sx={{
          marginBottom: `-1px`,
          "& .MuiTabs-scroller": {
            overflow: `visible !important`,
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {tabs
          .map(tab => {
            if (typeof tab === "string") {
              return { label: tab }
            }
            return tab
          })
          .map((tab, index) => (
            <MuiTab
              key={index}
              {...tab}
              value={index}
              sx={{
                textTransform: "none",
                borderLeft: `1px solid ${alpha(theme.palette.divider, 0)}`,
                borderRight: `1px solid ${alpha(theme.palette.divider, 0)}`,
                borderTop: `1px solid ${alpha(theme.palette.divider, 0)}`,
                color: theme.palette.primary.main,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                ":hover": {
                  borderLeft: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.25
                  )}`,
                  borderRight: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.25
                  )}`,
                  borderTop: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.25
                  )}`,
                },
                "&.Mui-selected": {
                  color: theme.palette.text.secondary,
                  backgroundColor: theme.palette.background.paper,
                  borderLeft: `1px solid ${theme.palette.divider}`,
                  borderRight: `1px solid ${theme.palette.divider}`,
                  borderTop: `1px solid ${theme.palette.divider}`,
                },
              }}
            />
          ))}
      </MuiTabs>
      <Paper
        variant="outlined"
        sx={{
          padding: 3,
          borderTopLeftRadius: selectedIndex === 0 ? 0 : undefined,
        }}
      >
        {children}
      </Paper>
    </>
  )
})
