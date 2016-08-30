import React from 'react'
import { Example } from 'documentation/common'
import { Card, CardBody } from 'components'

const componentStyle = {
    base: {
        width: 296
    }
};

const description = "You can have a nice image on top of Card by using the " +
    "<code class='inline'>image</code> property.";

const code = `import React from 'react'
import { Card } from 'js-channel-ui-kit'

const style = {
    width: 296
};

const CardExample = () => 
    <Card
        style={style}
        title="Restaurant"
        image="http://www.thebroadmoorblog.com/wp-content/uploads/P1010253.jpg"
    >
        Sed tempus, odio nec laoreet pulvinar, erat elit tristique dolor, 
        ut sollicitudin ex nunc vel eros. Sed magna erat, condimentum.
    </Card>`;

const ImageExampleCard = (props) => 
    <Example
        title="Image"
        description={description}
        code={code}
    >
        <Card
            style={componentStyle.base}
            title="Restaurant"
            image="http://www.thebroadmoorblog.com/wp-content/uploads/P1010253.jpg"
        >
            Sed tempus, odio nec laoreet pulvinar, erat elit tristique dolor, 
            ut sollicitudin ex nunc vel eros. Sed magna erat, condimentum.
        </Card>
    </Example>

export {
    ImageExampleCard
}
