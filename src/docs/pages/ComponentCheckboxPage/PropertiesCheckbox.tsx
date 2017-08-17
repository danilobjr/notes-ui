import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'docs/common';

export const PropertiesCheckbox: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="checked"
      type="bool"
      defaultValue="false"
      description="If true, Checkbox is checked."
    />

    <Property
      name="onChange"
      type="function"
      description="Triggered when Checkbox changes (checks or unchecks)."
    />
  </PropertyTable>
);

PropertiesCheckbox.displayName = 'PropertiesCheckbox';
