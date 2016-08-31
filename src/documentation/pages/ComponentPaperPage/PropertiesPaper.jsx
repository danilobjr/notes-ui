import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesPaper = (props) => 
    <PropertyTable>
        <Property
            name="elevation"
            type="number"
            defaultValue="1"
            description="Elevation level. Can be one of: [0,1,2,3]." 
        />
    </PropertyTable>

export {
    PropertiesPaper
}
