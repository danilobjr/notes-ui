import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { grayscale } from 'react-syntax-highlighter/dist/styles'
import { Paper } from 'components'
import { ExampleHeader } from './ExampleHeader'
import { ExampleBody } from './ExampleBody'

const componentStyle = {
    base: {
        marginTop: 20,
        borderRadius: 3
    }
};

@Radium
class Example extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            showCode: false
        };
    }

    render() {
        const { title, description, code, children } = this.props;

        return (
            <Paper style={componentStyle.base}>
                <ExampleHeader title={title} onClickShowCode={this.toggleCodeView.bind(this)} />
                {this.renderCode()}
                <ExampleBody description={description}>{children}</ExampleBody>
            </Paper>
        );
    }

    renderCode() {
        const { code } = this.props;
        const { showCode } = this.state;

        return showCode
            ? <SyntaxHighlighter language='js' style={grayscale}>{code}</SyntaxHighlighter>
            : null;
    }

    toggleCodeView() {
        this.setState({ showCode: !this.state.showCode });
    }
}

Example.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
};

export {
    Example
}
