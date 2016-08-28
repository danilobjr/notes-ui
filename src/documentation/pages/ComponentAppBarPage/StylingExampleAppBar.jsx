import React from 'react'
import { Example } from 'documentation/common'
import { AppBar } from 'components'
import { colors } from 'styles'

const componentStyle = {
    example: {
        backgroundColor: '#3498db'
    }
};

const description = "It's totally fine have a custom style.";

const code = `import React from 'react'
import { AppBar } from 'js-channel-ui-kit'

const style = {
    base: {
        backgroundColor: '#3498db'
    },
    icon: {
        color: '#f8f8f8'
    }
}

const AppBarExample = props =>
    <AppBar style={style.base} toggleDrawerIconColor={style.icon.color} />`;

const StylingExampleAppBar = (props) => 
    <Example
        title="Styling Example"
        code={code}
        description={description}
    >
        <AppBar style={componentStyle.example} toggleDrawerIconColor={colors.font.white} />
    </Example>

export {
    StylingExampleAppBar
}