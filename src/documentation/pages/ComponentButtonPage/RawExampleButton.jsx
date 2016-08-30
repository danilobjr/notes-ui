import React from 'react'
import { Example } from 'documentation/common'
import { Button } from 'components'
import { colors } from 'styles'

const description = "This is how you get Button if you don't pass any props. " +
    "It has a nice elevation and, when hovered, its shadow spreads a little bit.";

const code = `import React from 'react'
import { Button } from 'js-channel-ui-kit'

const ButtonExample = () => 
    <Button />`;

const RawExampleButton = (props) => 
    <Example
        title="Raw"
        description={description}
        code={code}
    >
        <Button />
    </Example>

export {
    RawExampleButton
}
