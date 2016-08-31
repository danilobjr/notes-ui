import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesLayout = (props) => 
    <PropertyTable>
        <Property
            name="title"
            type="string"
            description="Title that will appear in AppBar." 
        />

        <Property
            name="drawerItems"
            type="arrayOf(element)"
            description="Array of React elements. Can be what you want, but to fits right, you muts use DrawerItem or DrawerSubitemsContainer elements." 
        />
    </PropertyTable>

export {
    PropertiesLayout
}
