import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'docs/common';

export const PropertiesIconButton: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="iconName"
      type="string"
      description="Is required. Name of the icon that will be rendered."
    />

    <Property
      name="iconColor"
      type="string"
      description="Sets the background color."
    />
  </PropertyTable>
);

PropertiesIconButton.displayName = 'PropertiesIconButton';
