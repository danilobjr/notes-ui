import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesCheckbox = (props) => 
    <PropertyTable>
        <Property
            name="checked"
            type="bool"
            defaultValue="false"
            description="If true, Checkbox is checked." 
        />

        <Property
            name="onCheck"
            type="function"
            description="Triggered when Checkbox is checked." 
        />

        <Property
            name="onUncheck"
            type="function"
            description="Triggered when Checkbox is unchecked." 
        />
    </PropertyTable>

export {
    PropertiesCheckbox
}
