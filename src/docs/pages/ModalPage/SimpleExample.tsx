import * as React from 'react';
import { PureComponent } from 'react';
import { Example } from 'docs/common';
import { Button, Modal } from 'components';

const description = 'This is a simple example on how use modal.' +
  ' Click on button and modal will open.';

const code = `import React from 'react';
import { Button, Modal } from 'jsc-react-ui';

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
          Open modal
        </Button>

        <Modal
          open={modalOpen}
          onClose={this.handleOnModalClose}
        />
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

export interface SimpleExampleState {
  modalOpen: boolean;
}

export class SimpleExample extends PureComponent<{}, SimpleExampleState> {
  state: SimpleExampleState = {
    modalOpen: false,
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <Example
        title="Simple"
        description={description}
        code={code}
      >
        <Button
          onClick={this.handleButtonClick}
        >
          Open modal
        </Button>

        <Modal
          open={modalOpen}
          onClose={this.handleOnModalClose}
        />
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
