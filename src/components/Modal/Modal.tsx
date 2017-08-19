import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { CSSProperties, PureComponent } from 'react';
import { Paper, PaperProps } from 'components';
import { BackgroundColor } from 'styles';

const styles = {
  container: {
    display: 'flex',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
  } as CSSProperties,
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: BackgroundColor.Black,
    opacity: .25,
  } as CSSProperties,
  noBackdrop: {
    opacity: 0,
  },
  modal: {
    display: 'flex',
    width: 300,
    height: 200,
    borderRadius: 4,
    zIndex: 1,
  },
};

export interface ModalProps extends PaperProps {
  noBackdrop?: boolean;
  open: boolean;
  onClose?: () => void;
}

@Radium
export class Modal extends PureComponent<ModalProps, {}> {
  static defaultProps: Partial<ModalProps> = {
    noBackdrop: false,
    onClose: () => { return; },
  };

  render() {
    const { children, noBackdrop, open, style, onClose, ...otherProps } = this.props;

    return open && (
      <div style={styles.container}>
        <Paper
          elevation={2}
          style={[styles.modal, style]}
          {...otherProps as any}
        >
          { children }
        </Paper>

        <div
          style={[
            styles.backdrop,
            noBackdrop && styles.noBackdrop,
          ]}
          onClick={onClose}
        />
      </div>
    );
  }
}
