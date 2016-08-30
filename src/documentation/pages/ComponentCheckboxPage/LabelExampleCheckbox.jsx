import React from 'react'
import { Example } from 'documentation/common'
import { Checkbox } from 'components'

const description = "You can pass a label inside Checkbox body.";

const code = `import React from 'react'
import { Checkbox } from 'js-channel-ui-kit'

const CheckboxExample = () => 
    <Checkbox>Cinema</Checkbox>`;

const LabelExampleCheckbox = (props) => 
    <Example
        title="Label"
        description={description}
        code={code}
    >
        <Checkbox>Cinema</Checkbox>
    </Example>

export {
    LabelExampleCheckbox
}
