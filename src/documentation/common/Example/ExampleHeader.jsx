import React, { PropTypes } from 'react'
import { IconButton } from 'components'

const componentStyle = {
    base: {
        height: 50,
        display: 'flex',
        alignItems: 'center',
        padding: '0 2px 0 18px',
    },
    header: {
        flex: 1,
        margin: 0
    }
};

const ExampleHeader = (props) => 
    <div style={componentStyle.base}>
        <h3 style={componentStyle.header}>{props.title}</h3>
        <IconButton iconName="search" onClick={props.onClickShowCode} />
    </div>

ExampleHeader.propTypes = {
    title: PropTypes.string,
    onClickShowCode: PropTypes.func
};

ExampleHeader.defaultProps = {
    title: 'Example',
    onClickShowCode: () => {}
};

export {
    ExampleHeader
}
