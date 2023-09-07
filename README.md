# material-ui-bootstrap

[DEMO HERE https://material-ui-bootstrap.xyz](https://material-ui-bootstrap.xyz)

[![npm version](https://badge.fury.io/js/material-ui-bootstrap.svg)](https://badge.fury.io/js/material-ui-bootstrap)

If you prefer the [Material UI](https://material-ui.com/) api but also like Bootstrap's clean buttons and useful color variants then this package is here for you. It wraps material-ui's `<Button>` and `<Card>` and `<Typography>` components and adds a new component `<Alert>`. Inspired by <https://react-bootstrap.github.io>.

[CHANGELOG.md](./CHANGELOG.md)

- [material-ui-bootstrap](#material-ui-bootstrap)
  - [Install](#install)
  - [Tabs](#tabs)
  - [Button](#button)
  - [Alert](#alert)
  - [Typography](#typography)
  - [Card](#card)
  - [Label](#label)
  - [Panel](#panel)

## Install

```bash
# use with mui v5
npm i material-ui-bootstrap@5

# use with mui v4
npm i material-ui-bootstrap@4
```

## Tabs

```tsx
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
```

## Button

**DEPRECATED** MUI v5 provides bootstrap coloring, you can style the rest in your theme provider.

Drop this in place of the material-ui `Button`. You may use the following color props: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.

```tsx
import React from "react"
import { Button } from "material-ui-bootstrap"

export default function App() {
  return (
    <Button color="success" variant="contained">
      Success
    </Button>
  )
}
```

## Alert

**DEPRECATED** MUI v5 provides a nicer Alert component now.

```tsx
import React from "react"
import { Alert } from "material-ui-bootstrap"

export default function App() {
  return (
    <Alert color="danger">
      <Alert.Heading>Heading</Alert.Heading>
      Alert danger
    </Alert>
  )
}
```

## Typography

```tsx
import React from "react"
import { Typography } from "material-ui-bootstrap"

export default function TypographyExample() {
  return <Typography color="success">Example</Typography>
}
```

## Card

```tsx
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "material-ui-bootstrap"

export default function CardExample() {
  return (
    <Card color="success">
      <CardHeader>CardHeader</CardHeader>
      <CardContent>
        <CardTitle>Title</CardTitle>
        Example card content.
      </CardContent>
    </Card>
  )
}
```

## Label

```tsx
import React from "react"
import { Label } from "material-ui-bootstrap"

export default function LabelExample() {
  return <Label color="info">Example</Label>
}
```

## Panel

```tsx
import React from "react"
import { Panel, PanelBody, PanelHeader } from "material-ui-bootstrap"

export default function PanelExample() {
  return (
    <Panel color="info">
      <PanelHeader>Header</PanelHeader>
      <PanelBody>Body</PanelBody>
    </Panel>
  )
}
```
