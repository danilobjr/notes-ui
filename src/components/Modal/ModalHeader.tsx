import * as React from 'react';
import { CSSProperties, HTMLProps, PureComponent } from 'react';

const styles = {
  display: 'flex',
  padding: 20,
} as CSSProperties;

export interface ModalHeaderProps extends HTMLProps<HTMLDivElement> {}

export class ModalHeader extends PureComponent<ModalHeaderProps, {}> {
  render() {
    const { children, style } = this.props;

    return (
      <div
        // style={[styles, style]}
        className="nui-modal-header"
      >
        { children }
      </div>
    );
  }
}
