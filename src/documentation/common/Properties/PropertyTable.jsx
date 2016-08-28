import React from 'react'

const componentStyle = {
    base: {
        width: '100%',
        textAlign: 'left',
        borderCollapse: 'collapse'
    },
    headers: {
        padding: '8px 10px',
        fontWeight: 400,
        borderTop: '1px solid',
        borderBottom: '2px solid'
    }
};

const PropertyTable = (props) => 
    <table style={componentStyle.base}>
        <thead>
            <tr>
                <th style={componentStyle.headers}>Name</th>
                <th style={componentStyle.headers}>Type</th>
                <th style={componentStyle.headers}>Default</th>
                <th style={componentStyle.headers}>Description</th>
            </tr>
        </thead>
        <tbody>{props.children}</tbody>
    </table>

export {
    PropertyTable
}
