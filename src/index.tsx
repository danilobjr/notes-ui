import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DocumentationApp } from './documentation';

const appContainer = document.getElementById('app');

ReactDOM.render(<DocumentationApp />, appContainer, () => { return; });
