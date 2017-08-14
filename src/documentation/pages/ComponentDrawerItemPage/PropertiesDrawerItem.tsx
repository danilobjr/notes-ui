import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'documentation/common';

export const PropertiesDrawerItem: SFC<any> = (props) => (
  <PropertyTable>
    <Property
      name="iconName"
      type="string"
      description="Name of the icon that will appear in the left side of a Drawer Item."
    />

    <Property
      name="text"
      type="string"
      description="Text inside the item."
    />

    <Property
      name="subitem"
      type="bool"
      description="If is true, a padding-left will be set."
    />
  </PropertyTable>
);

PropertiesDrawerItem.displayName = 'PropertiesDrawerItem';
