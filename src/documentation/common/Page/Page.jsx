import React, { PropTypes } from 'react'
import { PageHeader } from './PageHeader'

const componentStyle = {
    base: {
        maxWidth: 1200,
        padding: '10px 10px 50px',
        margin: '0 auto'
    }
};

const Page = (props) =>
    <div style={componentStyle.base}>
        <PageHeader>{props.headerText}</PageHeader>
        <div>{props.children}</div>
    </div>

Page.propTypes = {
    headerText: PropTypes.string.isRequired
};

export {
    Page
}
