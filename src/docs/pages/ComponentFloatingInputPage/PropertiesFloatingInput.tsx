import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'docs/common';

export const PropertiesFloatingInput: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="placeholder"
      type="string"
      description="A placeholder to the input."
    />

    <Property
      name="leftElement"
      type="element"
      description="A React element in the left side, before input."
    />
  </PropertyTable>
);

PropertiesFloatingInput.displayName = 'PropertiesFloatingInput';
