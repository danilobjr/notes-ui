import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'documentation/common';

export const PropertiesButton: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="flat"
      type="bool"
      description="When true, button will look like a link. Without elevation or background. Background will appear only when clicked."
    />

    <Property
      name="children"
      type="any"
      defaultValue="Button"
      description="Label of the button or anything else."
    />
  </PropertyTable>
);

PropertiesButton.displayName = 'PropertiesButton';
