import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { ThemeProvider } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import GitHubIcon from "@material-ui/icons/GitHub"
import {
  DarkModeProvider,
  useDarkMode,
} from "material-ui-pack/dist/DarkModeProvider"
import DarkModeToggle from "material-ui-pack/dist/DarkModeToggle"
import React from "react"
import Button from "./Button"
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
        <br />
        <Grid container justify="space-between">
          <Grid>
            <Typography variant="h3" component="h1">
              material-ui-bootstrap
            </Typography>
            <code>npm install material-ui-bootstrap</code>
            <br />
            <br />
            <DarkModeToggle />
          </Grid>
          <Grid>
            <Button
              startIcon={<GitHubIcon />}
              color="secondary"
              variant="contained"
              href="https://github.com/claytonfbell/material-ui-bootstrap"
            >
              GitHub
            </Button>
          </Grid>
        </Grid>
        <br />
        <Paper style={{ padding: 20 }} elevation={4}>
          <Typography variant="h4" component="h2">
            Button
          </Typography>
          <ButtonExample />
        </Paper>
        <br />
        <br />
        <Paper style={{ padding: 20 }} elevation={4}>
          <Typography variant="h4" component="h2">
            Alert
          </Typography>
          <br />

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
