import Grid from "@material-ui/core/Grid"
import React from "react"
import { bootstrapColors } from "../Alert"
import Button from "../Button"
import ButtonSnippet from "./ButtonSnippet"

export default function ButtonExample() {
  return (
    <>
      <Grid container spacing={2}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={4} md={2} justify="space-between">
              <Button variant="contained" color={color}>
                {color}
              </Button>
            </Grid>
            <Grid item xs={4} md={2}>
              <Button variant="outlined" color={color}>
                {color}
              </Button>
            </Grid>
            <Grid item xs={4} md={2}>
              <Button variant="text" color={color}>
                {color}
              </Button>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <br />
      <ButtonSnippet />
      <br />
    </>
  )
}
