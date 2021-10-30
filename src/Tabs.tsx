import Paper from "@material-ui/core/Paper"
import { fade, styled, useTheme } from "@material-ui/core/styles"
import MuiTab, { TabProps as MuiTabProps } from "@material-ui/core/Tab"
import MuiTabs, { TabsProps as MuiTabsProps } from "@material-ui/core/Tabs"
import * as React from "react"

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export const StyledTabs = styled((props: MuiTabsProps) => (
  <MuiTabs {...props} />
))(() => ({
  marginBottom: -1,
  "& .MuiTabs-scroller": {
    overflow: `visible !important`,
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}))

const StyledTab = styled((props: MuiTabProps) => (
  <MuiTab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  borderLeft: `1px solid ${fade(theme.palette.divider, 0)}`,
  borderRight: `1px solid ${fade(theme.palette.divider, 0)}`,
  borderTop: `1px solid ${fade(theme.palette.divider, 0)}`,
  color: theme.palette.primary.main,
  borderTopLeftRadius: 6,
  borderTopRightRadius: 6,
  minWidth: 64,
  ":hover": {
    borderLeft: `1px solid ${fade(theme.palette.primary.main, 0.25)}`,
    borderRight: `1px solid ${fade(theme.palette.primary.main, 0.25)}`,
    borderTop: `1px solid ${fade(theme.palette.primary.main, 0.25)}`,
  },
  "&.Mui-selected": {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}))

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
      <StyledTabs ref={ref} {...props} value={selectedIndex}>
        {tabs
          .map(tab => {
            if (typeof tab === "string") {
              return { label: tab }
            }
            return tab
          })
          .map((tab, index) => (
            <StyledTab
              key={index}
              {...tab}
              value={index}
              onClick={() => onSelect(index)}
            />
          ))}
      </StyledTabs>
      <Paper
        variant="outlined"
        style={{
          padding: theme.spacing(3),
          borderTopLeftRadius: selectedIndex === 0 ? 0 : undefined,
        }}
      >
        {children}
      </Paper>
    </>
  )
})
