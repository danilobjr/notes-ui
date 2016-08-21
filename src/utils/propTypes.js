import { PropTypes, Children } from 'react'
import { objectValues } from 'utils'
import { colors } from 'styles'
import { CheckboxLabel } from 'components'

const propTypes = {
    fontColors: PropTypes.oneOf(objectValues(colors.font)),
    backgroundColors: PropTypes.oneOf(objectValues(colors.background)),
    elevation: PropTypes.oneOf([0,1,2,3,4,5]),
    stringOrCheckboxLabel: (props, propName, componentName) => {
        const child = props[propName];

        if (child.type !== CheckboxLabel && typeof child !== 'string') {
            return new Error(`Children supplied to '${componentName}' can only be an instance of CheckboxLabel or a string.`);
        }
    }
};

export {
    propTypes
}
