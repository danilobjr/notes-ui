import React from 'react'
import { Example } from 'documentation/common'
import { FAB } from 'components'

const description = "You can style it using some properties.";

const code = `import React from 'react'
import { FAB } from 'js-channel-ui-kit'

const Example = () => 
    <FAB iconName="plus" color="#f1c40f" iconColor="#2c3e50" />`;

const StylingExampleFAB = (props) => 
    <Example
        title="Styling"
        description={description}
        code={code}
    >
        <FAB iconName="plus" color="#f1c40f" iconColor="#2c3e50" />
    </Example>

export {
    StylingExampleFAB
}
