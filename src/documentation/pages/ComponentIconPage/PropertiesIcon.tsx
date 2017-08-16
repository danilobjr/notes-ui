import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'documentation/common';

export const PropertiesIcon: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="name"
      type="string"
      description="Icon name."
    />

    <Property
      name="color"
      type="string"
      defaultValue="#727272"
      description="Sets the background color."
    />
  </PropertyTable>
);

PropertiesIcon.displayName = 'PropertiesIcon';
