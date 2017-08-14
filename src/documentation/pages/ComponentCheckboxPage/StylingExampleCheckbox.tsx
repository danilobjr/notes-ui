import * as React from 'react';
import { PureComponent } from 'react';
import { Example } from 'documentation/common';
import { Checkbox } from 'components';
import { colors } from 'styles';

const componentStyle = {
  checked: {
    fontStyle: 'italic',
    fontWeight: 600,
    color: colors.font.lightGray,
    textDecoration: 'line-through',
  },
};

const description = 'You can style it as well.';

const code = `import React, { Component } from 'react';
import { Checkbox } from 'jsc-react-ui';

const style = {
  checked: {
    fontStyle: 'italic',
    fontWeight: 600,
    color: '#b8b8b8',
    textDecoration: 'line-through',
  },
};

class StylingCheckbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  render() {
    const { checked } = this.state;

    return (
      <Checkbox
        onCheck={() => this.checkOption()}
        onUncheck={() => this.uncheckOption()}
      >
        <span style={checked ? style.checked : {}}>
          Lunch with my friends
        </span>
      </Checkbox>
    );
  }

  checkOption() {
    this.setState({ checked: true });
  }

  uncheckOption() {
    this.setState({ checked: false });
  }
}`;

export interface StylingExampleCheckboxState {
  checked: boolean;
}

export class StylingExampleCheckbox extends PureComponent<{}, StylingExampleCheckboxState> {
  constructor() {
    super();

    this.state = {
      checked: false,
    };
  }

  render() {
    const { checked } = this.state;

    return (
      <Example
        title="Styling"
        description={description}
        code={code}
      >
        <Checkbox
          onChange={this.handleChange}
        >
          <span style={checked ? componentStyle.checked : {}}>
            Lunch with my friends
          </span>
        </Checkbox>
      </Example>
    );
  }

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }

  uncheckOption() {
    this.setState({ checked: false });
  }
}
