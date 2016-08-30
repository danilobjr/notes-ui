import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesDrawerSubitemsContainer = (props) => 
    <PropertyTable>
        <Property
            name="iconName"
            type="string"
            description="Name of the icon that will appear in the left side." 
        />

        <Property
            name="text"
            type="string"
            description="Text inside." 
        />

        <Property
            name="expanded"
            type="bool"
            defaultValue="false"
            description="If is true, the container will appear expanded." 
        />
    </PropertyTable>

export {
    PropertiesDrawerSubitemsContainer
}
