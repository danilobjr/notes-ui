import * as React from 'react';
import * as Radium from 'radium';
import { CSSProperties, HTMLProps, PureComponent } from 'react';

const styles = {
  display: 'flex',
  padding: '10px 20px',
  flex: 1,
} as CSSProperties;

export interface ModalBodyProps extends HTMLProps<HTMLDivElement> {}

@Radium
export class ModalBody extends PureComponent<ModalBodyProps, {}> {
  render() {
    const { children, style } = this.props;

    return (
      <div style={[styles, style]}>{ children }</div>
    );
  }
}
