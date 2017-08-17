import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { CSSProperties, PureComponent, ReactNode } from 'react';
import { Paper, PaperProps } from 'components';
import { elevation, BackgroundColor } from 'styles';

const styleComponent = {
  base: {
    display: 'flex',
    alignItems: 'center',
    height: '54px',
    borderRadius: '27px',
    borderTop: '1px solid white',
    backgroundColor: BackgroundColor.White,

    ':focus': elevation['2'],
  },
  input: {
    base: {
      flex: 1,
      width: '100%',
      paddingBottom: '3px',
      marginRight: '18px',
      fontWeight: 300,
      backgroundColor: BackgroundColor.White,
      border: 'none',
    },
    noLeftElement: {
      marginLeft: '22px',
    },
  },
};

const getInputStyle = (style, props) => ([
  style.input.base,
  !props.leftElement && style.input.noLeftElement,
]);

export interface FloatingInputProps extends PaperProps {
  leftElement?: ReactNode;
  placeholder?: string;
}

@Radium
export class FloatingInput extends PureComponent<FloatingInputProps, {}> {
  static defaultProps: FloatingInputProps = {
    placeholder: '',
    leftElement: null,
  };

  render() {
    const { style, leftElement, placeholder, ...otherProps } = this.props;

    return (
      <Paper
        style={[styleComponent.base, style]}
        {...otherProps as any}
      >
        {!!leftElement && leftElement}

        <input
          style={getInputStyle(styleComponent, this.props)}
          type="text"
          placeholder={placeholder}
        />
      </Paper>
    );
  }
}
