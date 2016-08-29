import React from 'react'
import { DrawerSubitemsContainer, DrawerItem } from 'components'
import { 
    ComponentAppBarPage,
    ComponentButtonPage 
} from 'documentation/pages'

const getDrawerItems = setCurrentPage => ([
    <DrawerSubitemsContainer key="1" text="Components">
        <DrawerItem subitem text="App Bar" onClick={() => setCurrentPage(ComponentAppBarPage)} />
        <DrawerItem subitem text="Button" onClick={() => setCurrentPage(ComponentButtonPage)} />
    </DrawerSubitemsContainer>
]);

export {
    getDrawerItems
}
