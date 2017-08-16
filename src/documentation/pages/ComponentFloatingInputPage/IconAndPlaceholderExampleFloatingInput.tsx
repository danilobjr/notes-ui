import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'documentation/common';
import { FloatingInput, Icon } from 'components';

const componentStyle = {
  base: {
    width: 246,
  },
  icon: {
    margin: '0 14px 0 18px',
  },
};

const description = 'Here you have a placeholder and a icon.';

const code = `import React from 'react';
import { FloatingInput } from 'jsc-react-ui';

const style = {
  base: {
    width: 246,
  },
  icon: {
    margin: '0 14px 0 18px',
  },
};

const Example = () => (
  <FloatingInput
    style={style.base}
    placeholder="Search"
    leftElement={<Icon style={style.icon} name="search />"}
  />
);`;

export const IconAndPlaceholderExampleFloatingInput: SFC<any> = () => (
  <Example
    title="Icon and Placeholder"
    description={description}
    code={code}
  >
    <FloatingInput
      style={componentStyle.base}
      placeholder="Search"
      leftElement={<Icon style={componentStyle.icon} name="search" />}
    />
  </Example>
);

IconAndPlaceholderExampleFloatingInput.displayName = 'IconAndPlaceholderExampleFloatingInput';
