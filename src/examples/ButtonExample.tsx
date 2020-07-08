import Grid from "@material-ui/core/Grid"
import React from "react"
import { bootstrapColors } from "../Alert"
import Button from "../Button"
import ButtonSnippet from "./ButtonSnippet"

export default function ButtonExample() {
  return (
    <>
      <Grid container spacing={2} justify="space-between">
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={4} md={2}>
              <Button fullWidth variant="contained" color={color}>
                {color}
              </Button>
            </Grid>
            <Grid item xs={4} md={2}>
              <Button fullWidth variant="outlined" color={color}>
                {color}
              </Button>
            </Grid>
            <Grid item xs={4} md={2}>
              <Button fullWidth variant="text" color={color}>
                {color}
              </Button>
            </Grid>
          </React.Fragment>
        ))}
        <Grid item xs={4} md={2}>
          <Button fullWidth variant="contained" color="primary" size="large">
            Large
          </Button>
        </Grid>
        <Grid item xs={4} md={2}>
          <Button fullWidth variant="contained" color="primary" size="medium">
            Medium
          </Button>
        </Grid>
        <Grid item xs={4} md={2}>
          <Button fullWidth variant="contained" color="primary" size="small">
            Small
          </Button>
        </Grid>
        <Grid item xs={4} md={2}></Grid> <Grid item xs={4} md={2}></Grid>{" "}
        <Grid item xs={4} md={2}></Grid>
      </Grid>
      <br />
      <ButtonSnippet />
      <br />
    </>
  )
}
