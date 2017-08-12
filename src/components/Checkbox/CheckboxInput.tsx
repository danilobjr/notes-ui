import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { HTMLProps, PureComponent, PropTypes } from 'react';
import { colors } from 'styles';

const componentStyle = {
  input: {
    base: {
      width: '24px',
      height: '24px',
      marginRight: '16px',
      border: '1px solid #dfdfdf',
      borderRadius: '3px',
    },
    checked: {
      backgroundColor: '#f0f0f0',
    },
  },
  checkMark: {
    base: {
      display: 'none',
    },
    inputChecked: {
      display: 'block',
      borderBottom: `2px solid ${colors.font.lightGray}`,
      borderLeft: `2px solid ${colors.font.lightGray}`,
      borderTop: 'none',
      borderRight: 'none',
      width: '13px',
      height: '5px',
      transformOrigin: '0px 100% 0px',
      transform: 'rotateZ(-45deg) translate(-1px, 14px)',
    },
  },
};

const getInputStyle = (style, props) => ([
  style.input.base,
  props.checked && style.input.checked,
]);

const getCheckMarkStyle = (style, props) => ([
  style.checkMark.base,
  props.checked && style.checkMark.inputChecked,
]);

export interface CheckboxInputProps extends HTMLProps<HTMLDivElement> { }

@Radium
export class CheckboxInput extends PureComponent<CheckboxInputProps, {}> {
  static defaultProps: CheckboxInputProps = {
    checked: false,
  };

  render() {
    const { ...otherProps } = omit(this.props, ['checked', 'style']);

    return (
      <div
        style={getInputStyle(componentStyle, this.props)}
        {...otherProps}
      >
        <div style={getCheckMarkStyle(componentStyle, this.props)} />
      </div>
    );
  }
}
