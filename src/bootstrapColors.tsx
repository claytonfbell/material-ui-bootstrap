import { Theme } from "@material-ui/core"

export type BootstrapColor =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"

const bootstrapColors: BootstrapColor[] = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
]
export default bootstrapColors

export const bootstrapPalette = (theme: Theme) => ({
  primary: {
    contrastText: theme.palette.primary.contrastText,
    main: theme.palette.primary.main,
  },
  secondary: {
    contrastText: theme.palette.secondary.contrastText,
    main: theme.palette.secondary.main,
  },
  success: {
    contrastText: "#fff",
    main: "#5cb85c",
  },
  danger: {
    contrastText: "#fff",
    main: "#d9534f",
  },
  warning: {
    contrastText: "#333",
    main: "#f0ad4e",
  },
  info: {
    contrastText: "#fff",
    main: "#5bc0de",
  },
  light: {
    contrastText: theme.palette.text.secondary,
    main: theme.palette.background.paper,
  },
  dark: {
    contrastText: theme.palette.background.paper,
    main: theme.palette.text.primary,
  },
})
