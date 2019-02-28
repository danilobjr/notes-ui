import * as React from 'react';
import * as classNames from 'classnames';
import { omit } from 'lodash';
import { HTMLProps, MouseEvent, PureComponent } from 'react';
import { CheckboxInput } from './CheckboxInput';

export type CheckboxProps = {
  onChange?: (checked: boolean) => void;
} & HTMLProps<HTMLDivElement>;

export type CheckboxState = {
  checked: boolean;
};

export class Checkbox extends PureComponent<CheckboxProps, CheckboxState> {
  static defaultProps: CheckboxProps = {
    checked: false,
    onChange: () => { return; },
  };

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
    const { children, className, ...otherProps } = omit(this.props, ['checked', 'onChange']);
    const { checked } = this.state;

    return (
      <div
        className={classNames('nui-checkbox', className)}
        onClick={this.handleClick}
        {...otherProps}
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
