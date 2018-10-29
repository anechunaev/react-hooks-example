import { createElement, useState } from 'react';

let renderCount = 0;

export default () => {
	++renderCount;
	const [ count, setCount ] = useState(0);

	return (
		<div>
			<div>Rendered {renderCount} times</div>
			<div>You clicked {count} times</div>
			<button onClick={() => setCount(++count)}>Click me!</button>
		</div>
	);
}