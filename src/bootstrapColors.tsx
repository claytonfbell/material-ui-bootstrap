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
    main: "#218838",
  },
  danger: {
    contrastText: "#fff",
    main: "#c82333",
  },
  warning: {
    contrastText: "#333",
    main: "#e0a800",
  },
  info: {
    contrastText: "#fff",
    main: "#138496",
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
