import React from 'react'

import WordContainer from './components/WordContainer.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<WordContainer />
			</div>
		)
	}
}