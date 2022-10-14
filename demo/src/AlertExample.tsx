import MUIAlert from "@mui/material/Alert"
import Grid from "@mui/material/Grid"
import { Alert, bootstrapColors } from "material-ui-bootstrap"
import React from "react"

export default function AlertExample() {
  return (
    <>
      <MUIAlert severity="warning">
        DEPRECATED: MUI v5 has a better Alert component now!
      </MUIAlert>

      <br />
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <Grid item key={idx} xs={6} md={3}>
            <Alert color={color} dismissible>
              {color}
            </Alert>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
