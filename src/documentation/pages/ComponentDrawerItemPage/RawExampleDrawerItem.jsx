import React from 'react'
import { Example } from 'documentation/common'
import { Drawer, DrawerItem } from 'components'

const componentStyle = {
    base: {
        height: 350
    }
};

const description = "This is how you get a Drawer Item if you don't pass any props. " +
    "You can't see it, but if you hover the begin of the Drawer below, you will see.";

const code = `import React from 'react'
import { Drawer, DrawerItem } from 'js-channel-ui-kit'

const style = {
    height: 350
};

const DrawerItemExample = () => 
    <Drawer style={style}>
        <DrawerItem />
    </Drawer>`;

const RawExampleDrawerItem = (props) => 
    <Example
        title="Raw"
        description={description}
        code={code}
    >
        <Drawer style={componentStyle.base}>
            <DrawerItem />
        </Drawer>
    </Example>

export {
    RawExampleDrawerItem
}
