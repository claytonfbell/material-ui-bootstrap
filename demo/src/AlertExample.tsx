import Grid from "@material-ui/core/Grid"
import InfoIcon from "@material-ui/icons/Info"
import { Alert, bootstrapColors } from "material-ui-bootstrap"
import React from "react"

export default function AlertExample() {
  return (
    <Grid container spacing={3}>
      {bootstrapColors.map((color, idx) => (
        <Grid item key={idx} xs={12} sm={6} md={4}>
          <Alert color={color} dismissible>
            <Alert.Heading icon={<InfoIcon />}>Heading</Alert.Heading>
            Alert {color} with a{" "}
            <a href="https://google.com" target="google">
              link
            </a>
            .
          </Alert>
        </Grid>
      ))}
    </Grid>
  )
}
