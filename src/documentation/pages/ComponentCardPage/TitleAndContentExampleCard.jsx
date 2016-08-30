import React from 'react'
import { Example } from 'documentation/common'
import { Card, CardBody } from 'components'

const description = "You can pass content to the Card using the " + 
    "<code class='inline'>title</code> property and something between the tags.";

const code = `import React from 'react'
import { Card } from 'js-channel-ui-kit'

const CardExample = () => 
    <Card title="Thoughts">
        Sed tempus, odio nec laoreet pulvinar, erat elit tristique dolor, 
        ut sollicitudin ex nunc vel eros. Sed magna erat, condimentum.
    </Card>`;

const TitleAndContentExampleCard = (props) => 
    <Example
        title="Title and Content"
        description={description}
        code={code}
    >
        <Card title="Thoughts">
            Sed tempus, odio nec laoreet pulvinar, erat elit tristique dolor, 
            ut sollicitudin ex nunc vel eros. Sed magna erat, condimentum.
        </Card>
    </Example>

export {
    TitleAndContentExampleCard
}
