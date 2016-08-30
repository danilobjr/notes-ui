import React from 'react'
import { DrawerSubitemsContainer, DrawerItem } from 'components'
import { 
    ComponentAppBarPage,
    ComponentButtonPage,
    ComponentCardPage,
    ComponentCheckboxPage,
    ComponentDrawerPage
} from 'documentation/pages'

const getDrawerItems = setCurrentPage => ([
    <DrawerSubitemsContainer key="1" text="Components">
        <DrawerItem subitem text="App Bar" onClick={() => setCurrentPage(ComponentAppBarPage)} />
        <DrawerItem subitem text="Button" onClick={() => setCurrentPage(ComponentButtonPage)} />
        <DrawerItem subitem text="Card" onClick={() => setCurrentPage(ComponentCardPage)} />
        <DrawerItem subitem text="Checkbox" onClick={() => setCurrentPage(ComponentCheckboxPage)} />
        <DrawerItem subitem text="Drawer" onClick={() => setCurrentPage(ComponentDrawerPage)} />
    </DrawerSubitemsContainer>
]);

export {
    getDrawerItems
}
