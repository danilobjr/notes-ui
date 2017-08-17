import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'docs/common';

export const PropertiesCard: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="title"
      type="string"
      description="Card's title."
    />

    <Property
      name="color"
      type="string"
      description="Color shown on title's background."
    />

    <Property
      name="image"
      type="string"
      description="An URL that points to an image."
    />
  </PropertyTable>
);

PropertiesCard.displayName = 'PropertiesCard';
