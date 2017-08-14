import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'documentation/common';

export const PropertiesDrawerSubitemsContainer: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="iconName"
      type="string"
      description="Name of the icon that will appear in the left side."
    />

    <Property
      name="text"
      type="string"
      description="Text inside."
    />

    <Property
      name="expanded"
      type="bool"
      defaultValue="false"
      description="If is true, the container will appear expanded."
    />
  </PropertyTable>
);

PropertiesDrawerSubitemsContainer.displayName = 'PropertiesDrawerSubitemsContainer';
