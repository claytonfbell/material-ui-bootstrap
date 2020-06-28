import { Grid } from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"
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
        <Grid item xs={12} sm={4}>
          <strong>contained</strong>
        </Grid>
        <Grid item xs={12} sm={4}>
          <strong>outlined</strong>
        </Grid>
        <Grid item xs={12} sm={4}>
          <strong>text</strong>
        </Grid>
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
        <Grid item xs={12} sm={4}>
          <Button>default</Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            startIcon={<SaveIcon />}
            variant="contained"
            color="success"
          >
            Save Changes
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            disabled
            startIcon={<SaveIcon />}
            variant="contained"
            color="success"
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
      <br />
      <ButtonSnippet />
      <br />
    </>
  )
}
