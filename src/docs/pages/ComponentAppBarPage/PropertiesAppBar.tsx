import * as React from 'react';
import { SFC } from 'react';
import { PropertyTable, Property } from 'docs/common';

export const PropertiesAppBar: SFC<any> = () => (
  <PropertyTable>
    <Property
      name="title"
      type="string"
      description="Title displayed in app bar."
    />

    <Property
      name="hideToggleDrawerIconButton"
      type="bool"
      defaultValue="false"
      description="Hide default button."
    />

    <Property
      name="toggleDrawerIconColor"
      type="string"
      description="Color of default button. Can be a string, rgb, hex or hsl value."
    />

    <Property
      name="onToggleDrawerClick"
      type="function"
      description="A function that will be triggered when the default button is clicked."
    />
  </PropertyTable>
);

PropertiesAppBar.displayName = 'PropertiesAppBar';
