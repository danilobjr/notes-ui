import React from 'react'
import { Example } from 'documentation/common'
import { AppBar } from 'components'

const description = "You can have a Title and a custom behavior in toggle drawer icon button.";

const code = `import React from 'react'
import { AppBar } from 'js-channel-ui-kit'

const AppBarExample = props =>
    <AppBar title="Page" onToggleDrawerClick={() => alert('Clicked')} />`;

const TitleAndClickExampleAppBar = (props) => 
    <Example
        title="Title and Click"
        description={description}
        code={code}
    >
        <AppBar title="Page" onToggleDrawerClick={() => alert('Clicked')} />
    </Example>

export {
    TitleAndClickExampleAppBar
}
