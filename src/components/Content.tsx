import * as React from 'react';

export default class Content extends React.Component <any, any> {
	constructor() {
		super();

		this.state = {
			changeMessage: false
		}
	}

	protected handleClick = () => {
		this.setState({
			changeMessage: !this.state.changeMessage
		})
	}

	public render() {
		const messageOne:string = "Hey there! Click me to see something cool!";
		const messageTwo:string = "You see! It's so awesome, right? Click me again!";

		let message = !this.state.changeMessage ? messageOne : messageTwo;

		return(
			<div className="content">
				<h1>Hello, this is the content component talking</h1>
				<h2>Click on the button below, trust me ;)</h2>
				<button onClick={this.handleClick}>{message}</button>
			</div>
		)
	}
}