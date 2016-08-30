import React from 'react'
import { Example } from 'documentation/common'
import { Checkbox } from 'components'

const description = "Checkbox can be checked as its initial state.";

const code = `import React from 'react'
import { Checkbox } from 'js-channel-ui-kit'

const CheckboxExample = () => 
    <Checkbox checked>Cinema</Checkbox>`;

const CheckedExampleCheckbox = (props) => 
    <Example
        title="Checked"
        description={description}
        code={code}
    >
        <Checkbox checked>Cinema</Checkbox>
    </Example>

export {
    CheckedExampleCheckbox
}
