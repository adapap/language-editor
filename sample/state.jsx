import React from 'react'

class MyClass extends React.Component {
	constructor(props) { //Set props and state in the constructor
		super(props)
		this.state = {
			name: "John",
			age: 15
		}
	}
	componentDidMount() { //Called as soon as component is mounted
		this.setState({
			name: "Adam",
			age: 18
		})
	}

	render() {
		return <div>Hello, my name is {this.state.name}. I am {this.state.age} year(s) old.</div>
	}
}