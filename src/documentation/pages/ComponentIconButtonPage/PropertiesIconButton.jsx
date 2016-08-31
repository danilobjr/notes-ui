import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesIconButton = (props) => 
    <PropertyTable>
        <Property
            name="iconName"
            type="string"
            description="Is required. Name of the icon that will be rendered." 
        />

        <Property
            name="iconColor"
            type="string"
            description="Sets the background color." 
        />
    </PropertyTable>

export {
    PropertiesIconButton
}
