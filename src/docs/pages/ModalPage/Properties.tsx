import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'docs/common';

export const Properties: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="noBackdrop"
      type="boolean"
      defaultValue="false"
      description="If true, hide backdrop."
    />

    <Property
      name="open"
      type="boolean"
      description="If true, show modal."
    />

    <Property
      name="onClose"
      type="function"
      defaultValue="() => { return; }"
      description="Called when click in backdrop."
    />
  </PropertyTable>
);

Properties.displayName = 'Properties';
