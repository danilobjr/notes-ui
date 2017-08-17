import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'docs/common';

export const PropertiesPaper: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="elevation"
      type="number"
      defaultValue="1"
      description="Elevation level. Can be one of: [0,1,2,3]."
    />
  </PropertyTable>
);

PropertiesPaper.displayName = 'PropertiesPaper';
