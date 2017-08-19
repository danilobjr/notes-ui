import * as React from 'react';
import * as Radium from 'radium';
import { CSSProperties, HTMLProps, PureComponent } from 'react';

const styles = {
  display: 'flex',
  padding: 20,
} as CSSProperties;

export interface ModalHeaderProps extends HTMLProps<HTMLDivElement> {}

@Radium
export class ModalHeader extends PureComponent<ModalHeaderProps, {}> {
  render() {
    const { children, style } = this.props;

    return (
      <div style={[styles, style]}>{ children }</div>
    );
  }
}
