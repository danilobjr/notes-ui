import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { PureComponent, PropTypes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { grayscale } from 'react-syntax-highlighter/dist/styles';
import { Paper, PaperProps } from 'components';
import { ExampleHeader } from './ExampleHeader';
import { ExampleBody } from './ExampleBody';

const componentStyle = {
  base: {
    marginTop: 20,
    borderRadius: 3,
  },
};

export interface ExampleProps extends PaperProps {
  code: string;
  description: string;
}

export interface ExampleState {
  showCode: boolean;
}

@Radium
export class Example extends PureComponent<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
    super(props);

    this.state = {
      showCode: false,
    };
  }

  render() {
    const { title, description, code, children } = this.props;
    const { showCode } = this.state;

    return (
      <Paper style={componentStyle.base}>
        <ExampleHeader title={title} onClickShowCode={this.toggleCodeView.bind(this)} />

        {showCode && (
          <SyntaxHighlighter
            language="js"
            style={grayscale}
          >
            {code}
          </SyntaxHighlighter>
        )}

        <ExampleBody description={description}>{children}</ExampleBody>
      </Paper>
    );
  }

  toggleCodeView() {
    this.setState({ showCode: !this.state.showCode });
  }
}
