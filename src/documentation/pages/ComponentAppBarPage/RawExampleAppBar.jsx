import React from 'react'
import { Example } from 'documentation/common'
import { AppBar } from 'components'
import { colors } from 'styles'

const description = "This is how you get AppBar if you don't pass any props. " +
    "It have white as its default background color and the toggle drawer icon is gray.";

const RawExampleAppBar = (props) => 
    <Example
        title="Raw example"
        description={description}
        code={`import React from 'react';
import { AppBar } from 'AppBar';

const AppBarExample = () => 
    <AppBar />

export {
    AppBarExample
}`}
    >
        <AppBar />
    </Example>

export {
    RawExampleAppBar
}
