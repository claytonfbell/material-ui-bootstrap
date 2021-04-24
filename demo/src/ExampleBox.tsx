import { Box, Paper, Typography } from "@material-ui/core"
import React from "react"

interface ExampleProps {
  title: string
  children: React.ReactNode
}

export function ExampleBox(props: ExampleProps) {
  return (
    <Paper variant="outlined" style={{ marginBottom: 20 }}>
      <Box padding={3}>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <br />
        {props.children}
      </Box>
    </Paper>
  )
}
