import React from 'react'
import { Example } from 'documentation/common'
import { Drawer, DrawerItem } from 'components'

const componentStyle = {
    base: {
        width: 236,
        height: 350,
        backgroundColor: '#3498db'
    }
};

const description = "You can style it as well.";

const code = `import React from 'react'
import { Drawer } from 'js-channel-ui-kit'

const style = {
    base: {
        width: 236,
        height: 350,
        backgroundColor: '#3498db'
    }
};

const DrawerExample = () => 
    <Drawer style={style} />`;

const StylingExampleDrawer = (props) => 
    <Example
        title="Styling"
        description={description}
        code={code}
    >
        <Drawer style={componentStyle.base} />
    </Example>

export {
    StylingExampleDrawer
}
