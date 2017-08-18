import * as React from 'react';
import { CSSProperties, SFC } from 'react';
import { Example } from 'docs/common';
import { Card } from 'components';

const componentStyle = {
  base: {
    width: 296,
  } as CSSProperties,
};

const description = 'You can have a nice image on top of Card by using the ' +
  '<code class="inline">image</code> property.';

const code = `import React from 'react';
import { Card } from 'jsc-react-ui';

const style = {
  width: 296,
};

const CardExample = () => (
  <Card
    style={style}
    title="Restaurant"
    image="http://proural.info.opt-images.1c-bitrix-cdn.ru/upload/iblock/66c/66c21eb3acb6b59e85bb022d330f38a6.jpg?1497597442216529"
  >
    Sed tempus, odio nec laoreet pulvinar, erat elit tristique dolor,
    ut sollicitudin ex nunc vel eros. Sed magna erat, condimentum.
  </Card>
);`;

export const ImageExampleCard: SFC<any> = () => (
  <Example
    title="Image"
    description={description}
    code={code}
  >
    <Card
      style={componentStyle.base}
      title="Restaurant"
      image="http://proural.info.opt-images.1c-bitrix-cdn.ru/upload/iblock/66c/66c21eb3acb6b59e85bb022d330f38a6.jpg?1497597442216529"
    >
      Sed tempus, odio nec laoreet pulvinar, erat elit tristique dolor,
            ut sollicitudin ex nunc vel eros. Sed magna erat, condimentum.
        </Card>
  </Example>
);

ImageExampleCard.displayName = 'ImageExampleCard';
