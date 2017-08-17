import * as React from 'react';
import { SFC } from 'react';
import { Example } from 'docs/common';
import { Icon } from 'components';

const description = 'Icon require that you use the <code class="inline">name</code> ' +
  'property.';

const code = `import React from 'react';
import { Icon } from 'jsc-react-ui';

const Example = () => <Icon name="plus" />;`;

export const SimpleExampleIcon: SFC<any> = () => (
  <Example
    title="Simple"
    description={description}
    code={code}
  >
    <Icon name="plus" />
  </Example>
);

SimpleExampleIcon.displayName = 'SimpleExampleIcon';
