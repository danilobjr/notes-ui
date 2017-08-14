import * as React from 'react';
import { CSSProperties, SFC } from 'react';
import { Button } from 'components';

const componentStyle = {
  base: {
    height: 50,
    display: 'flex',
    alignItems: 'center',
    padding: '0 3px 0 18px',
  } as CSSProperties,
  header: {
    flex: 1,
    margin: 0,
  },
};

export interface ExampleHeaderProps {
  title: string;
  onClickShowCode: () => void;
}

export const ExampleHeader: SFC<ExampleHeaderProps> = ({ title, onClickShowCode }) => (
  <div style={componentStyle.base}>
    <h3 style={componentStyle.header}>{title}</h3>

    <Button flat onClick={onClickShowCode}>Toggle Code</Button>
  </div>
);

ExampleHeader.displayName = 'ExampleHeader';

ExampleHeader.defaultProps = {
  title: 'Example',
  onClickShowCode: () => { return null; },
};
