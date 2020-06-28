import Grid from "@material-ui/core/Grid"
import React from "react"
import Alert, { bootstrapColors } from "../Alert"
import AlertSnippet from "./AlertSnippet"

export default function AlertExample() {
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <Alert color={color}>
              <Alert.Heading>Heading</Alert.Heading>
              Alert {color} with a{" "}
              <a href="https://google.com" target="google">
                link
              </a>
              .
            </Alert>
          </Grid>
        ))}
      </Grid>

      <AlertSnippet />
    </>
  )
}
