import React from 'react'

import Word from './Word.jsx'

export default class GridView extends React.Component {
	constructor(props) {
		super(props)
	}

	renderList() {
		return ( this.props.wordData.map(val => <div key={val.id.toString()} className="pure-u-1-8 grid_item">
		<Word wordType="grid"
			wordName={val.name}
			wordPartOfSpeech={val.partOfSpeech}
			wordMeanings={val.meanings} />
		</div> )
		)
	}

	render() {
		return (
			<div className="pure-g">{this.renderList()}</div>
		)
	}
}