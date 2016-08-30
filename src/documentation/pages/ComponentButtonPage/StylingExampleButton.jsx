import React from 'react'
import color from 'color'
import { Example } from 'documentation/common'
import { Button } from 'components'
import { colors } from 'styles'

const componentStyle = {
    base: {
        color: colors.font.white,
        backgroundColor: '#3498db',

        ':active': {
            backgroundColor: color('#3498db').darken(.2).hexString()
        }
    }
};

const description = "You can style it as well.";

const code = `import React from 'react'
import { Button } from 'js-channel-ui-kit'

const style = {
    color: '#f8f8f8',
    backgroundColor: '#3498db',

    ':active': {
        backgroundColor: '#207ab6'
    }
};

const AppBarExample = props =>
    <Button style={style} />`;

const StylingExampleButton = (props) => 
    <Example
        title="Styling"
        description={description}
        code={code}
    >
        <Button style={componentStyle.base} />
    </Example>

export {
    StylingExampleButton
}
