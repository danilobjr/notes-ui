import React from 'react'
import { Example } from 'documentation/common'
import { AppBar } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        width: '100%',
        backgroundColor: colors.background.blue
    }
};

const RawExampleAppBar = (props) => 
    <Example
        title="Raw example"
        description="This is how you get AppBar if you don't pass any props."
        code={`import React from 'react';
import { AppBar } from 'AppBar';

const AppBarExample = () => 
    <AppBar />

export {
    AppBarExample
}`}
    >
        <AppBar style={componentStyle.base} />
    </Example>

export {
    RawExampleAppBar
}
