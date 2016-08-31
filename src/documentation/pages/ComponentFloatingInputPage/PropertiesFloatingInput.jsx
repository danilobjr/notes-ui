import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesFloatingInput = (props) => 
    <PropertyTable>
        <Property
            name="placeholder"
            type="string"
            description="A placeholder to the input." 
        />

        <Property
            name="leftElement"
            type="element"
            description="A React element in the left side, before input." 
        />
    </PropertyTable>

export {
    PropertiesFloatingInput
}
