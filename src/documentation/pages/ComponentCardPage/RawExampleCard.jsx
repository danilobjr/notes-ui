import React from 'react'
import { Example } from 'documentation/common'
import { Card } from 'components'

const description = "This is how you get Card if you don't pass any props. " +
    "Just a piece of paper. " +
    "It has an elevation and, when hovered, its shadow spreads a little bit. ";

const code = `import React from 'react'
import { Card } from 'js-channel-ui-kit'

const CardExample = () => 
    <Card />`;

const RawExampleCard = (props) => 
    <Example
        title="Raw"
        description={description}
        code={code}
    >
        <Card />
    </Example>

export {
    RawExampleCard
}
