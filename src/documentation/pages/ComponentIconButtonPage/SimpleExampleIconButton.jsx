import React from 'react'
import { Example } from 'documentation/common'
import { IconButton } from 'components'

const description = "Icon Button require that you use the " +
    "<code class='inline'>iconName</code> property. " +
    "By default it has a transparent background."

const code = `import React from 'react'
import { IconButton } from 'js-channel-ui-kit'

const Example = () => 
    <IconButton iconName="plus" />`;

const SimpleExampleIconButton = (props) => 
    <Example
        title="Simple"
        description={description}
        code={code}
    >
        <IconButton iconName="plus" />
    </Example>

export {
    SimpleExampleIconButton
}
