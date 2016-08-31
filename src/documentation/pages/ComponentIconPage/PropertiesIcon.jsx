import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesIcon = (props) => 
    <PropertyTable>
        <Property
            name="name"
            type="string"
            description="Icon name." 
        />

        <Property
            name="color"
            type="string"
            defaultValue="#727272"
            description="Sets the background color." 
        />
    </PropertyTable>

export {
    PropertiesIcon
}
