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
      {selected === 0 ? <>Cat</> : null}
      {selected === 1 ? <>Dog</> : null}
      {selected === 2 ? <>Bird</> : null}
    </Tabs>
  )
}
