import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { ThemeProvider } from "@material-ui/core/styles"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Alert, Button, Typography } from "material-ui-bootstrap"
import { DarkModeProvider, DarkModeToggle, useDarkMode } from "material-ui-pack"
import React from "react"
import AlertExample from "../src/AlertExample"
import "../src/App.css"
import ButtonExample from "../src/ButtonExample"
import CardExample from "../src/CardExample"
import TypographyExample from "../src/TypographyExample"

function AppContent() {
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
    typography: {
      htmlFontSize: 10,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <CssBaseline />
        <br />
        <Grid container justify="space-between">
          <Grid>
            <Typography variant="h3" component="h1" color="dark">
              material-ui-bootstrap
            </Typography>
            <br />
            <Alert color="light">
              <a href="https://badge.fury.io/js/material-ui-bootstrap">
                <img
                  src="https://badge.fury.io/js/material-ui-bootstrap.svg"
                  alt="npm version"
                />
              </a>
              &nbsp;
              <a href="https://travis-ci.org/claytonfbell/material-ui-bootstrap">
                <img
                  src="https://travis-ci.org/claytonfbell/material-ui-bootstrap.svg?branch=master"
                  alt="Build Status"
                />
              </a>
              <div>
                <code>npm install material-ui-bootstrap</code>
              </div>
            </Alert>
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
        <Alert color="light">
          <Alert.Heading>Button</Alert.Heading>
          <br />
          <ButtonExample />
        </Alert>
        <br />
        <br />
        <Alert color="light">
          <Alert.Heading>Alert</Alert.Heading>
          <br />
          <AlertExample />
        </Alert>
        <br />
        <br />
        <Alert color="light">
          <Alert.Heading>Typography</Alert.Heading>
          <br />
          <TypographyExample />
        </Alert>
        <br />
        <br />
        <Alert color="light">
          <Alert.Heading>Card</Alert.Heading>
          <br />
          <CardExample />
        </Alert>
      </Container>
    </ThemeProvider>
  )
}

export default function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}
