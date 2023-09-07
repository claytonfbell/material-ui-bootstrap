import GitHubIcon from "@mui/icons-material/GitHub"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import CssBaseline from "@mui/material/CssBaseline"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import { DarkModeProvider, DarkModeToggle, useDarkMode } from "material-ui-pack"
import "../src/App.css"
import CardExample from "../src/CardExample"
import CardSnippet from "./CardSnippet"
import { ExampleBox } from "./ExampleBox"
import LabelExample from "./LabelExample"
import LabelSnippet from "./LabelSnippet"
import PanelExample from "./PanelExample"
import PanelSnippet from "./PanelSnippet"
import { TabsExample } from "./TabsExample"
import { TabsSnippet } from "./TabsSnippet"

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
            <Paper variant="outlined" sx={{ padding: 2 }}>
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
            </Paper>
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

        <ExampleBox title="Label" snippet={<LabelSnippet />}>
          <LabelExample />
        </ExampleBox>

        <ExampleBox title="Card" snippet={<CardSnippet />}>
          <CardExample />
        </ExampleBox>

        <ExampleBox title="Panel" snippet={<PanelSnippet />}>
          <PanelExample />
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
