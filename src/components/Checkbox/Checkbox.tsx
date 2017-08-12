import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { HTMLProps, MouseEvent, PureComponent, PropTypes } from 'react';
import { CheckboxInput } from 'components';

const componentStyle = {
  base: {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',

    ':hover': {
      cursor: 'pointer',
    },
  },
};

export interface PropsTransformer extends HTMLProps<HTMLDivElement> {
  onChange?: any;
}

export interface CheckboxProps extends PropsTransformer {
  onChange?: (checked: boolean) => void;
}

@Radium
export class Checkbox extends PureComponent<CheckboxProps, {}> {
  static defaultProps: CheckboxProps = {
    checked: false,
    onChange: () => { return; },
  };

  render() {
    const { style, checked, children, ...otherProps } = omit(this.props, ['onChange']);

    return (
      <div
        style={[componentStyle.base, style]}
        onClick={this.handleClick.bind(this)}
        {...otherProps}
      >
        <CheckboxInput checked={checked} />

        {children}
      </div>
    );
  }

  handleClick(e: MouseEvent<HTMLDivElement>) {
    this.props.onChange(!this.props.checked);
  }
}
