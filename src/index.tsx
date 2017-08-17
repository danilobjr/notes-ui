import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DocsApp } from './docs';

const appContainer = document.getElementById('app');

ReactDOM.render(<DocsApp />, appContainer, () => { return; });
