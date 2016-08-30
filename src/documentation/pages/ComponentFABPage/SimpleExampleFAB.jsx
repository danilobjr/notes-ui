import React from 'react'
import { Example } from 'documentation/common'
import { FAB } from 'components'

const description = "FAB require that you use the <code class='inline'>iconName</code> " +
    "property. By default it has a redish background and a white color for the icon."

const code = `import React from 'react'
import { FAB } from 'js-channel-ui-kit'

const Example = () => 
    <FAB iconName="plus" />`;

const SimpleExampleFAB = (props) => 
    <Example
        title="Simple"
        description={description}
        code={code}
    >
        <FAB iconName="plus" />
    </Example>

export {
    SimpleExampleFAB
}
