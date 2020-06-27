import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core"
import { DarkModeProvider, DarkModeToggle, useDarkMode } from "material-ui-pack"
import React from "react"
import AlertExample from "./examples/AlertExample"
import ButtonExample from "./examples/ButtonExample"

function App() {
  const { createMuiThemeWithDarkMode } = useDarkMode()
  const theme = createMuiThemeWithDarkMode({
    palette: {
      primary: {
        main: "#0080ff",
      },
      secondary: {
        main: "#69757d",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <CssBaseline />
        <Typography variant="h2" component="h1">
          Examples
        </Typography>
        <DarkModeToggle />
        <br />
        <br />
        <Paper style={{ padding: 20 }} elevation={4}>
          <ButtonExample />
          <AlertExample />
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default () => (
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
)
