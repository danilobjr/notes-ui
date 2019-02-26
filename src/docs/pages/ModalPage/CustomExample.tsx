import * as React from 'react';
import { CSSProperties, HTMLProps, PureComponent, SFC } from 'react';
import { Example } from 'docs/common';
import { Button, IconButton, Modal, ModalBody, ModalFooter, ModalHeader, ModalProps } from 'components';
import { ButtonColor } from 'styles';

const description = 'A customized modal.';

const code = `import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'jsc-react-ui';

const styles = {
  modal: {
    width: 500,
    height: 400,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  input: {
    border: 'none',
    fontWeight: 600,
    fontSize: '1.1em',
    flex: 1,
  } as CSSProperties,
  textarea: {
    border: 'none',
    resize: 'none',
    flex: 1,
  },
};

class Example extends React.Component {
  state = {
    modalOpen: false,
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <div>
        <Button
          onClick={this.handleButtonClick}
        >
          Open custom modal
        </Button>

        <Modal
          style={styles.modal}
          noBackdrop
          open={modalOpen}
          onClose={this.handleOnModalClose}
        >
          <ModalHeader>
            <input
              style={styles.input}
              type="text"
              placeholder="Title here"
            />
          </ModalHeader>

          <ModalBody>
            <textarea
              style={styles.textarea}
              placeholder="Note content here"
            />
          </ModalBody>

          <ModalFooter>
            <Button flat onClick={this.handleOnModalClose}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  handleButtonClick = () => {
    this.setState({modalOpen: true});
  }

  handleOnModalClose = () => {
    this.setState({modalOpen: false});
  }
}`;

const styles = {
  modal: {
    width: 500,
    height: 400,
    backgroundColor: '#fff',
    flexDirection: 'column',
  } as CSSProperties,
  input: {
    border: 'none',
    fontWeight: 600,
    fontSize: '1.1em',
    flex: 1,
  } as CSSProperties,
  textarea: {
    border: 'none',
    resize: 'none',
    flex: 1,
  } as CSSProperties,
};

export interface CustomExampleState {
  modalOpen: boolean;
}

export class CustomExample extends PureComponent<{}, CustomExampleState> {
  state: CustomExampleState = {
    modalOpen: false,
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <Example
        title="Custom"
        description={description}
        code={code}
      >
        <Button
          onClick={this.handleButtonClick}
        >
          Open custom modal
        </Button>

        <Modal
          style={styles.modal}
          noBackdrop
          open={modalOpen}
          onClose={this.handleOnModalClose}
        >
          <ModalHeader>
            <input
              style={styles.input}
              type="text"
              placeholder="Title here"
            />
          </ModalHeader>

          <ModalBody>
            <textarea
              style={styles.textarea}
              placeholder="Note content here"
            />
          </ModalBody>

          <ModalFooter>
            <Button flat onClick={this.handleOnModalClose}>Save</Button>
          </ModalFooter>
        </Modal>
      </Example>
    );
  }

  handleButtonClick = () => {
    this.setState({modalOpen: true});
  }

  handleOnModalClose = () => {
    this.setState({modalOpen: false});
  }
}
