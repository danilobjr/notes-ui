import React from 'react'
import { Example } from 'documentation/common'
import { Drawer } from 'components'

const description = "This is how you get Drawer if you don't pass any props. " +
    "Just a empty sidebar with size of the entire screen.";

const code = `import React from 'react'
import { Drawer } from 'js-channel-ui-kit'

const DrawerExample = () => 
    <Drawer />`;

const RawExampleDrawer = (props) => 
    <Example
        title="Raw"
        description={description}
        code={code}
    >
        <Drawer />
    </Example>

export {
    RawExampleDrawer
}
