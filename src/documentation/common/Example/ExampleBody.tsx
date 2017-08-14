import * as React from 'react';
import { SFC } from 'react';
import { Paragraph } from 'documentation/common';

const componentStyle = {
  base: {
    padding: 18,
  },
  description: {
    marginTop: 0,
  },
};

export interface ExampleBodyProps {
  description: string;
}

export const ExampleBody: SFC<ExampleBodyProps> = (props) => (
  <div style={componentStyle.base}>
    <Paragraph
      style={componentStyle.description}
      dangerouslySetInnerHTML={{ __html: props.description }}
    />
    {props.children}
  </div>
);

ExampleBody.displayName = 'ExampleBody';
