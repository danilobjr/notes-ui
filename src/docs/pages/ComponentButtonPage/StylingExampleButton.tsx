import * as React from 'react';
import * as Color from 'color';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Button } from 'components';
import { FontColor } from 'styles';

const componentStyle = {
  base: {
    color: FontColor.White,
    backgroundColor: '#3498db',

    ':active': {
      backgroundColor: Color('#3498db').darken(.2).rgb().string(),
    },
  },
};

const description = 'You can style it as well.';

const code = `import React from 'react';
import { Button } from 'jsc-react-ui';

const style = {
  color: '#f8f8f8',
  backgroundColor: '#3498db',

  ':active': {
    backgroundColor: '#207ab6',
  },
};

const AppBarExample = () => <Button style={style} />;`;

export const StylingExampleButton: SFC<any> = () => (
  <Example
    title="Styling"
    description={description}
    code={code}
  >
    <Button style={componentStyle.base} />
  </Example>
);

StylingExampleButton.displayName = 'StylingExampleButton';
