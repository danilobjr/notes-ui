import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'docs/common';

export const PropertiesFAB: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="iconName"
      type="string"
      description="Choose the inner icon by name."
    />

    <Property
      name="color"
      type="string"
      defaultValue="#da7287"
      description="Sets the background color."
    />

    <Property
      name="iconColor"
      type="string"
      description="Sets the icon color."
    />
  </PropertyTable>
);

PropertiesFAB.displayName = 'PropertiesFAB';
