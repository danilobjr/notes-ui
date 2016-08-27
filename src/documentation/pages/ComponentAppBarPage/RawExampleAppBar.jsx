import React from 'react'
import { Example } from 'documentation/common'
import { AppBar } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        backgroundColor: '#3498db'
    }
};

const description = "This is how you get AppBar if you don't pass any props. " +
    "I just change the colors to you see better. " +
    "It have white as its default background color and the toggle drawer icon is gray.";

const RawExampleAppBar = (props) => 
    <Example
        title="Raw example"
        description={description}
        code={`import React from 'react';
import { AppBar } from 'AppBar';

const style = {
    base: {
        backgrondColor: '#3498db'
    },
    icon: {
        color: '#f8f8f8'
    }
};

const AppBarExample = () => 
    <AppBar style={style.base} toggleDrawerIconColor={style.icon.color} />

export {
    AppBarExample
}`}
    >
        <AppBar style={componentStyle.base} toggleDrawerIconColor={colors.font.white} />
    </Example>

export {
    RawExampleAppBar
}
