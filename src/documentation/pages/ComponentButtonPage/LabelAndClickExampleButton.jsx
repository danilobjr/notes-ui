import React from 'react'
import { Example } from 'documentation/common'
import { Button } from 'components'

const description = "Here you has a label and a click behavior.";

const code = `import React from 'react'
import { Button } from 'js-channel-ui-kit'

const AppBarExample = props =>
    <Button onClick={() => alert('Button clicked')}>Click me</Button>`;

const LabelAndClickExampleButton = (props) => 
    <Example
        title="Label and Click"
        description={description}
        code={code}
    >
        <Button onClick={() => alert('Button clicked')}>Click me</Button>
    </Example>

export {
    LabelAndClickExampleButton
}
