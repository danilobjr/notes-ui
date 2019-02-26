import * as React from 'react';
import { CSSProperties, HTMLProps, PureComponent } from 'react';

const styles = {
  display: 'flex',
  borderTop: '1px solid #efefef',
  padding: 12,
  justifyContent: 'flex-end',
  alignItems: 'center',
} as CSSProperties;

export interface ModalFooterProps extends HTMLProps<HTMLDivElement> {}

export class ModalFooter extends PureComponent<ModalFooterProps, {}> {
  render() {
    const { children, style } = this.props;

    return (
      <div
        // style={[styles, style]}
        className="nui-modal-footer"
      >
        { children }
      </div>
    );
  }
}
