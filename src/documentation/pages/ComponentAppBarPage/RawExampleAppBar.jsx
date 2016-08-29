import React from 'react'
import { Example } from 'documentation/common'
import { AppBar } from 'components'
import { colors } from 'styles'

const description = "This is how you get AppBar if you don't pass any props. " +
    "It have white as its default background color and the toggle drawer icon is gray.";

const code = `import React from 'react'
import { AppBar } from 'js-channel-ui-kit'

const AppBarExample = () => 
    <AppBar />`;

const RawExampleAppBar = (props) => 
    <Example
        title="Raw"
        description={description}
        code={code}
    >
        <AppBar />
    </Example>

export {
    RawExampleAppBar
}
