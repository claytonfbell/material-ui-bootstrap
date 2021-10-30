import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
export function TabsSnippet() {
  const codeString = `
  import { Box } from "@mui/material"
  import { Tabs } from "material-ui-bootstrap"
  import React, { useState } from "react"
  
  export function TabsExample() {
    const [selected, setSelected] = useState(0)
    return (
      <Tabs
        selectedIndex={selected}
        onSelect={newIndex => setSelected(newIndex)}
        tabs={["Cat", "Dog", "Bird"]}
      >
        {selected === 0 ? <Box>Cat</Box> : null}
        {selected === 1 ? <Box>Dog</Box> : null}
        {selected === 2 ? <Box>Bird</Box> : null}
      </Tabs>
    )
  }
  
`
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  )
}