## How to update the hardcoded presets
Go into Lifted button presets and look at the `LIFTED_BUTTON_PRESETS` definition.
God help you if you want to add gradients.

## How to use
Note that a live demo is in storybook

### Using presets
Here's an example using the default primary button type:
```javascript
'use client'
import { LiftedButton } from "@/components/LiftedButton";

export default function Home() {
  return (
    <LiftedButton onPress={doSomething}>Click here</LiftedButton>
  )
}

function doSomething() { alert("You do it!") }
```

### With an icon
You could use any of the style presets "primary" (default), "secondary", "destructive", or "positive":
`<LiftedButton onPress={doSomething} preset="positive">Click here</LiftedButton>`

Set icons using the iconRight or iconLeft fields. Note, you'll need to import and configure your icon first:
``` javascript
import { LiftedButton } from "@/components/LiftedButton";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

export default function Home() {
  return (
    <LiftedButton onPress={doSomething} leftIcon={ArrowUpRightIcon({size: 22})}>Click here</LiftedButton>
  )
}
```

### Manual Colors
Import the colour type and pass it into the colorOverrides property. Note that it will override whichever preset you've chosen, so you can start with a base and tweak it. Below it's tweaking the default "primary".
```javascript
import { LiftedButton, type LiftedButtonColors } from "@/components/LiftedButton";

// Can be partial to override just some colours
const customColors: Partial<LiftedButtonColors> = { 
  bg: "#588ddb";
  text: "--color-jade-2"; // Can use variables
}

export default function Home() {
  return (
    <LiftedButton onPress={doSomething} colorOverrides={customColors}>Click here</LiftedButton>
  )
}
```