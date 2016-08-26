import React, { PropTypes } from 'react'
import { PageHeader } from './PageHeader'

const componentStyle = {
    base: {
        maxWidth: 1200,
        padding: 10,
        margin: '0 auto'
    }
};

const Page = (props) =>
    <div style={componentStyle.base}>
        <PageHeader>{props.headerText}</PageHeader>
    </div>

Page.propTypes = {
    headerText: PropTypes.string.isRequired
};

export {
    Page
}
