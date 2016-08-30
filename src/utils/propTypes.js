import { PropTypes, Children } from 'react'
import { objectValues } from 'utils'
import { colors } from 'styles'
import { CheckboxLabel } from 'components'

const propTypes = {
    fontColors: PropTypes.oneOf(objectValues(colors.font)),
    backgroundColors: PropTypes.oneOf(objectValues(colors.background)),
    elevation: PropTypes.oneOf([0,1,2,3])
};

export {
    propTypes
}
