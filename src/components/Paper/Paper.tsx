import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, SFC } from 'react';

export type Elevation = 0 | 1 | 2 | 3 | 4;

export type PaperProps = {
  elevation?: Elevation;
} & HTMLProps<HTMLDivElement>;

export const Paper: SFC<PaperProps> = (props) => {
  const { className, elevation, ...otherProps } = props;

  const elevationClassname = `elevation-${elevation}`;

  return (
    <div
      className={classNames(
        'nui-paper',
        { [elevationClassname]: !!elevation },
        className,
      )}
      {...otherProps}
    >
      {props.children}
    </div>
  );
};

Paper.defaultProps = {
  elevation: 1,
};
