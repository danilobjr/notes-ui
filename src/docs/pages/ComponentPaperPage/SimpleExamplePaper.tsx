import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Paper } from 'components';

const componentStyle = {
  base: {
    width: 200,
    height: 200,
  },
};

const description = 'This is how you get Paper if you don\'t pass any properties.' +
  ' It has an AppBar, a DSimpleer and a PaperBody, that has a gray background color.' +
  ' You can click on default button to toggle the dSimpleer.';

const code = `import React from 'react';
import { Paper } from 'jsc-react-ui';

const Example = () => <Paper />;`;

export const SimpleExamplePaper: SFC<any> = () => (
  <Example
    title="Simple"
    description={description}
    code={code}
  >
    <Paper style={componentStyle.base} />
  </Example>
);

SimpleExamplePaper.displayName = 'SimpleExamplePaper';
