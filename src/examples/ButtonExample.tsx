import Grid from "@material-ui/core/Grid"
import React from "react"
import { bootstrapColors } from "../Alert"
import Button from "../Button"
import ButtonSnippet from "./ButtonSnippet"

export default function ButtonExample() {
  return (
    <>
      <br />
      <br />
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={12} sm={4}>
              <Button variant="contained" color={color}>
                {color}
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button variant="outlined" color={color}>
                {color}
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
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
