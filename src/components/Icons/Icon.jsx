import React, { Component, PropTypes } from 'react'
import { IconFile } from './IconFile'
import { IconList } from './IconList'
import { IconMenu } from './IconMenu'
import { IconPlus } from './IconPlus'
import { IconSearch } from './IconSearch'
import { colors } from 'styles'

const icons = {
    file: IconFile,
    list: IconList,
    menu: IconMenu,
    plus: IconPlus,
    search: IconSearch
};

const componentStyle = {
    base: {
        width: 20,
        height: 20
    }
};

class Icon extends Component {
    render() {
        const { style, name, color, ...others } = this.props;

        return React.createElement(icons[name], { 
            style: Object.assign({}, componentStyle.base, style),
            color,
            ...others
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
