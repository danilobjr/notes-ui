import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { IconButton } from 'components';
import color from 'color';

const componentStyle = {
  base: {
    backgroundColor: '#3498db',

    ':active': {
      backgroundColor: color('#3498db').lighten(.2).hexString(),
    },
  },
};

const description = 'You can style it as well with <code class="inline">style</code> ' +
  'property. To change icon color, use <code class="inline">iconColor</code> ' +
  'property.'

const code = `import React from 'react';
import { IconButton } from 'jsc-react-ui';

const style = {
  backgroundColor: '#3498db',
  ':active': {
    backgroundColor: '#63b0e3',
  },
};

const Example = () => <IconButton style={style} iconName="plus" iconColor="#f8f8f8" />;`;

export const StylingExampleIconButton: SFC<any> = () => (
  <Example
    title="Styling"
    description={description}
    code={code}
  >
    <IconButton style={componentStyle.base} iconName="plus" iconColor="#f8f8f8" />
  </Example>
);

StylingExampleIconButton.displayName = 'StylingExampleIconButton';
