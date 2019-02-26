import * as React from 'react';
import * as classNames from 'classnames';
import { omit } from 'lodash';
import { HTMLProps, PureComponent, SFC } from 'react';
// import { BackgroundColor, elevation } from './../styles';

// const componentStyle = {
//   base: {
//     backgroundColor: BackgroundColor.White,
//     boxSizing: 'border-box',
//     overflow: 'hidden',
//   },
// };

// const getStyle = (props) => ([
//   componentStyle.base,
//   props.elevation && elevation[props.elevation],
//   props.style,
// ]);

export type Elevation = 0 | 1 | 2 | 3 | 4;

export type PaperProps = {
  elevation?: Elevation;
} & HTMLProps<HTMLDivElement>;

export const Paper: SFC<PaperProps> = (props) => {
  const { className, ...otherProps } = omit(props, ['elevation']);

  return (
    <div
      className={classNames('nui-paper', 'elevation-3')}
      {...otherProps}
    >
      {props.children}
    </div>
  );
};

Paper.defaultProps = {
  elevation: 1,
};
