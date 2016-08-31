import React from 'react'
import { Example } from 'documentation/common'
import { Layout } from 'components'

const description = "This is how you get Layout if you don't pass any properties." +
    " It has an AppBar, a Drawer and a LayoutBody, that has a gray background color." +
    " You can click on default button to toggle the drawer.";

const code = `import React from 'react'
import { Layout } from 'js-channel-ui-kit'

const Example = () => 
    <Layout />`;

const RawExampleLayout = (props) => 
    <Example
        title="Raw"
        description={description}
        code={code}
    >
        <Layout />
    </Example>

export {
    RawExampleLayout
}
