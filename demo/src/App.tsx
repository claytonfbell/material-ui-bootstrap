import GitHubIcon from "@mui/icons-material/GitHub"
import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material"
import Box from "@mui/system/Box"
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
import { TabsExample } from "./TabsExample"
import { TabsSnippet } from "./TabsSnippet"
import TooltipExample from "./TooltipExample"
import TooltipSnippet from "./TooltipSnippet"
import TypographySnippet from "./TypographySnippet"

function AppContent() {
  const { createMuiThemeWithDarkMode, darkMode } = useDarkMode()
  const theme = createMuiThemeWithDarkMode({
    palette: {
      primary: {
        main: "#337ab7",
      },
      secondary: {
        main: "#69757d",
      },
      ...(!darkMode
        ? {
            background: {
              default: "#eee",
            },
          }
        : undefined),
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
        <Grid container justifyContent="space-between">
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
                <Box marginTop={2}>
                  <Typography>
                    <strong>Install for MUI v5</strong>
                  </Typography>
                  <code>npm install material-ui-bootstrap@5</code>
                </Box>
                <Box marginTop={2}>
                  <Typography>
                    <strong>Install for MUI v4</strong>
                  </Typography>
                  <code>npm install material-ui-bootstrap@4</code>
                </Box>
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

        <ExampleBox title="Tabs" snippet={<TabsSnippet />}>
          <TabsExample />
        </ExampleBox>

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
