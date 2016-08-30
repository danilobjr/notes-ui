import React from 'react'
import { PropertyTable, Property } from 'documentation/common'

const PropertiesCard = (props) => 
    <PropertyTable>
        <Property
            name="title"
            type="string"
            description="Card's title." 
        />

        <Property
            name="color"
            type="string"
            description="Color shown on title's background." 
        />

        <Property
            name="image"
            type="string"
            description="An URL that points to an image." 
        />
    </PropertyTable>

export {
    PropertiesCard
}
