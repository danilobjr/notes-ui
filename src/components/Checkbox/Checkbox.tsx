import * as React from 'react';
import { omit } from 'lodash';
import { HTMLProps, MouseEvent, PureComponent } from 'react';
import { CheckboxInput } from './CheckboxInput';

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

export interface CheckboxState {
  checked: boolean;
}

export class Checkbox extends PureComponent<CheckboxProps, CheckboxState> {
  static defaultProps: CheckboxProps = {
    checked: false,
    onChange: () => { return; },
  };

  state: CheckboxState;

  constructor(props: CheckboxProps) {
    super(props);

    this.state = {
      checked: props.checked,
    };
  }

  componentWillReceiveProps(nextProps: CheckboxProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({checked: nextProps.checked});
    }
  }

  render() {
    const { children, ...otherProps } = omit(this.props, ['checked', 'onChange']);
    const { checked } = this.state;

    return (
      <div
        className="nui-checkbox"
        onClick={this.handleClick}
        {...otherProps as any}
      >
        <CheckboxInput checked={checked} />

        {children}
      </div>
    );
  }

  private handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const { checked } = this.state;

    this.props.onChange(!checked);
    this.setState({checked: !checked});
  }
}
