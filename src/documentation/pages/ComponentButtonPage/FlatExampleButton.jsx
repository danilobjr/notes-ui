import React from 'react'
import { Example } from 'documentation/common'
import { Button } from 'components'
import { colors } from 'styles'

const description = "If you pass the <code class='inline'>flat</code> prop, it will look like a link. " +
    "When clicked, it will reveal a background color.";

const code = `import React from 'react'
import { Button } from 'js-channel-ui-kit'

const ButtonExample = () => 
    <Button flat />`;

const FlatExampleButton = (props) => 
    <Example
        title="Flat example"
        description={description}
        code={code}
    >
        <Button flat />
    </Example>

export {
    FlatExampleButton
}
