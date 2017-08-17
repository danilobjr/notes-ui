import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Card } from 'components';

const componentStyle = {
  base: {
    width: 246,
  },
};

const description = 'You can style it as well.';

const code = `import React from 'react';
import { Card } from 'jsc-react-ui';

const style = {
  width: 246,
};

const CardExample = () => (
  <Card style={style} title="Thoughts" color="#3498db">
    Sed tempus, odio nec laoreet pulvinar, erat elit tristique dolor,
    ut sollicitudin ex nunc vel eros. Sed magna erat, condimentum.
  </Card>
);`;

export const StylingExampleCard: SFC<any> = () => (
  <Example
    title="Styling"
    description={description}
    code={code}
  >
    <Card
      style={componentStyle.base}
      title="Thoughts"
      color="#3498db"
    >
      Sed tempus, odio nec laoreet pulvinar, erat elit tristique dolor,
      ut sollicitudin ex nunc vel eros. Sed magna erat, condimentum.
    </Card>
  </Example>
);

StylingExampleCard.displayName = 'StylingExampleCard';
