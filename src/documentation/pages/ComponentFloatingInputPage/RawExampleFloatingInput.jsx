import React from 'react'
import { Example } from 'documentation/common'
import { FloatingInput } from 'components'

const description = "This is how you get FloatingInput if you don't pass any properties. " +
    "It has a nice elevation when focused.";

const code = `import React from 'react'
import { FloatingInput } from 'js-channel-ui-kit'

const Example = () => 
    <FloatingInput />`;

const RawExampleFloatingInput = (props) => 
    <Example
        title="Raw"
        description={description}
        code={code}
    >
        <FloatingInput />
    </Example>

export {
    RawExampleFloatingInput
}
