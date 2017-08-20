import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { HTMLProps, PureComponent } from 'react';
import { BackgroundColor, elevation } from './../styles';

const componentStyle = {
  base: {
    backgroundColor: BackgroundColor.White,
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
};

const getStyle = (props) => ([
  componentStyle.base,
  props.elevation && elevation[props.elevation],
  props.style,
]);

export type Elevation = 0 | 1 | 2 | 3;

export interface PaperProps extends HTMLProps<HTMLDivElement> {
  elevation?: Elevation;
}

@Radium
export class Paper extends PureComponent<PaperProps, {}> {
  static defaultProps: PaperProps = {
    elevation: 1,
  };

  render() {
    const { ...otherProps } = omit(this.props, ['elevation', 'style']);

    return (
      <div
        style={getStyle(this.props)}
        {...otherProps}
      >
        {this.props.children}
      </div>
    );
  }
}
