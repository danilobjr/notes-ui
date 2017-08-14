import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'documentation/common';
import { AppBar } from 'components';

const description = 'You can have a Title and a custom behavior in toggle drawer icon button.';

const code = `import React from 'react';
import { AppBar } from 'jsc-react-ui';

const AppBarExample = () => (
  <AppBar title="Page" onToggleDrawerClick={() => alert('Clicked')} />
);`;

export const TitleAndClickExampleAppBar: SFC<any> = () => (
  <Example
    title="Title and Click"
    description={description}
    code={code}
  >
    <AppBar title="Page" onToggleDrawerClick={() => alert('Clicked')} />
  </Example>
);

TitleAndClickExampleAppBar.displayName = 'TitleAndClickExampleAppBar';
