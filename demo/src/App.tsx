import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Grid from "@material-ui/core/Grid"
import { ThemeProvider } from "@material-ui/core/styles"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Button, Panel, PanelBody, Typography } from "material-ui-bootstrap"
import { DarkModeProvider, DarkModeToggle, useDarkMode } from "material-ui-pack"
import React from "react"
import AlertExample from "../src/AlertExample"
import "../src/App.css"
import ButtonExample from "../src/ButtonExample"
import CardExample from "../src/CardExample"
import TypographyExample from "../src/TypographyExample"
import AlertSnippet from "./AlertSnippet"
import ButtonSnippet from "./ButtonSnippet"
import CardSnippet from "./CardSnippet"
import { ExampleBox } from "./ExampleBox"
import LabelExample from "./LabelExample"
import LabelSnippet from "./LabelSnippet"
import PanelExample from "./PanelExample"
import PanelSnippet from "./PanelSnippet"
import TooltipExample from "./TooltipExample"
import TooltipSnippet from "./TooltipSnippet"
import TypographySnippet from "./TypographySnippet"

function AppContent() {
  const { createMuiThemeWithDarkMode } = useDarkMode()
  const theme = createMuiThemeWithDarkMode({
    palette: {
      primary: {
        main: "#337ab7",
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
            <Panel color="light">
              <PanelBody>
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
              </PanelBody>
            </Panel>
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

        <ExampleBox title="Button" snippet={<ButtonSnippet />}>
          <ButtonExample />
        </ExampleBox>

        <ExampleBox title="Label" snippet={<LabelSnippet />}>
          <LabelExample />
        </ExampleBox>

        <ExampleBox title="Typography" snippet={<TypographySnippet />}>
          <TypographyExample />
        </ExampleBox>

        <ExampleBox title="Alert" snippet={<AlertSnippet />}>
          <AlertExample />
        </ExampleBox>

        <ExampleBox title="Card" snippet={<CardSnippet />}>
          <CardExample />
        </ExampleBox>

        <ExampleBox title="Panel" snippet={<PanelSnippet />}>
          <PanelExample />
        </ExampleBox>

        <ExampleBox title="Tooltip" snippet={<TooltipSnippet />}>
          <TooltipExample />
        </ExampleBox>
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
