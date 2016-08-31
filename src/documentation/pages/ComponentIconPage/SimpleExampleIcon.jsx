import React from 'react'
import { Example } from 'documentation/common'
import { Icon } from 'components'

const description = "Icon require that you use the <code class='inline'>name</code> " +
    "property.";

const code = `import React from 'react'
import { Icon } from 'js-channel-ui-kit'

const Example = () => 
    <Icon name="plus" />`;

const SimpleExampleIcon = (props) => 
    <Example
        title="Simple"
        description={description}
        code={code}
    >
        <Icon name="plus" />
    </Example>

export {
    SimpleExampleIcon
}
