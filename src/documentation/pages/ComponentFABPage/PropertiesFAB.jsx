import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesFAB = (props) => 
    <PropertyTable>
        <Property
            name="iconName"
            type="string"
            description="Choose the inner icon by name." 
        />

        <Property
            name="color"
            type="string"
            defaultValue="#da7287"
            description="Sets the background color." 
        />

        <Property
            name="iconColor"
            type="string"
            description="Sets the icon color." 
        />
    </PropertyTable>

export {
    PropertiesFAB
}
