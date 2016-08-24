import React, { Component, PropTypes } from 'react'
import { IconFile } from './IconFile'
import { IconMenu } from './IconMenu'
import { IconPlus } from './IconPlus'
import { IconSearch } from './IconSearch'
import { colors } from 'styles'

const icons = {
    file: IconFile,
    menu: IconMenu,
    plus: IconPlus,
    search: IconSearch
};

const componentStyle = {
    base: {
        width: '20px'
    }
};

class Icon extends Component {
    render() {
        const { name, style, color } = this.props;

        return React.createElement(icons[name], { 
            style: Object.assign({}, componentStyle.base, style),
            color
        });    
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string
};

Icon.defaultProps = {
    color: colors.font.gray
};

export {
    Icon
}
