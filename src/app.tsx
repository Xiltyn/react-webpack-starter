/**
 * Created by Xiltyn on 15.03.2017.
 */
import './assets/scss/main.scss';

import * as React from 'react';
import * as ReactDom from 'react-dom';
import Content from './components/Content';

ReactDom.render(
	<Content/>,
	document.getElementById('app')
);