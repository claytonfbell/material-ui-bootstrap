import Grid from '@material-ui/core/Grid';
import React from 'react';
import { bootstrapColors, Typography } from '../../dist';
// import TypographySnippet from './TypographySnippet';

export default function TypographyExample() {
  return (
    <>
      <Grid container spacing={3}>
        {bootstrapColors.map((color, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={6} sm={3}>
              <Typography color={color}>{color}</Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <br />
      {/* <TypographySnippet /> */}
      <br />
    </>
  );
}
