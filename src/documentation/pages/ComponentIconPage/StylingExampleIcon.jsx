import React from 'react'
import { Example } from 'documentation/common'
import { Icon } from 'components'

const componentStyle = {
    base: {
        width: 35,
        height: 35
    }
};

const description = "You can style it as well.";

const code = `import React from 'react'
import { Icon } from 'js-channel-ui-kit'

const style = {
    base: {
        width: 35,
        height: 35
    }
};

const Example = () => 
    <Icon style={style} name="plus" color="#e74c3c" />`;

const StylingExampleIcon = (props) => 
    <Example
        title="Styling"
        description={description}
        code={code}
    >
        <Icon style={componentStyle.base} name="plus" color="#e74c3c" />
    </Example>

export {
    StylingExampleIcon
}
