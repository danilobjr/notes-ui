import * as React from 'react';
import { DrawerSubitemsContainer, DrawerItem } from 'components';
import {
  ComponentAppBarPage,
  ComponentButtonPage,
  ComponentCardPage,
  ComponentCheckboxPage,
  ComponentDrawerItemPage,
  ComponentDrawerPage,
  ComponentDrawerSubitemsContainerPage,
  ComponentFABPage,
  ComponentFloatingInputPage,
  ComponentIconButtonPage,
  ComponentIconPage,
  ComponentLayoutPage,
  ComponentPaperPage,
} from 'docs/pages';

export const getDrawerItems = setCurrentPage => (
  <DrawerSubitemsContainer key="1" text="Components">
    <DrawerItem subitem text="App Bar" onClick={() => setCurrentPage(ComponentAppBarPage)} />
    <DrawerItem subitem text="Button" onClick={() => setCurrentPage(ComponentButtonPage)} />
    <DrawerItem subitem text="Card" onClick={() => setCurrentPage(ComponentCardPage)} />
    <DrawerItem subitem text="Checkbox" onClick={() => setCurrentPage(ComponentCheckboxPage)} />
    <DrawerItem subitem text="Drawer" onClick={() => setCurrentPage(ComponentDrawerPage)} />
    <DrawerItem subitem text="Drawer Item" onClick={() => setCurrentPage(ComponentDrawerItemPage)} />
    <DrawerItem subitem text="Drawer SubItems Container" onClick={() => setCurrentPage(ComponentDrawerSubitemsContainerPage)} />
    <DrawerItem subitem text="FAB" onClick={() => setCurrentPage(ComponentFABPage)} />
    <DrawerItem subitem text="Floating Input" onClick={() => setCurrentPage(ComponentFloatingInputPage)} />
    <DrawerItem subitem text="Icon Button" onClick={() => setCurrentPage(ComponentIconButtonPage)} />
    <DrawerItem subitem text="Icon" onClick={() => setCurrentPage(ComponentIconPage)} />
    <DrawerItem subitem text="Layout" onClick={() => setCurrentPage(ComponentLayoutPage)} />
    <DrawerItem subitem text="Paper" onClick={() => setCurrentPage(ComponentPaperPage)} />
  </DrawerSubitemsContainer>
);
