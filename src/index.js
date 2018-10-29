import { createElement } from 'react';
import { render } from 'react-dom';
import App from './component';

document.addEventListener("DOMContentLoaded", () => {
	render(
		createElement(App),
		document.getElementById('app'),
	);
});