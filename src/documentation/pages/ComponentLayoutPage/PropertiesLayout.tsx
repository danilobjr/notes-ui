import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'documentation/common';

export const PropertiesLayout: SFC<any> = () => (
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
);

PropertiesLayout.displayName = 'PropertiesLayout';
