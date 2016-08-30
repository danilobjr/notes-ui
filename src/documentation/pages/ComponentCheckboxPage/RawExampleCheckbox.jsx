import React from 'react'
import { Example } from 'documentation/common'
import { Checkbox } from 'components'

const description = "This is how you get Checkbox if you don't pass any props. " +
    "Just a clickable checker.";

const code = `import React from 'react'
import { Checkbox } from 'js-channel-ui-kit'

const CheckboxExample = () => 
    <Checkbox />`;

const RawExampleCheckbox = (props) => 
    <Example
        title="Raw"
        description={description}
        code={code}
    >
        <Checkbox />
    </Example>

export {
    RawExampleCheckbox
}
