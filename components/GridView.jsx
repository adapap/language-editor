import React from 'react'

import Word from './Word.jsx'

export default class GridView extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fullWord: null
		}
		this.handleWordClick = this.handleWordClick.bind(this)
	}

	handleWordClick(data) {
		this.setState({
			fullWord: data
		})
	}

	render() {
		return (
			<div className="pure-g">
				<div className="pure-u-3-4"><div className="pure-g">{this.renderList()}</div></div>
				{this.state.fullWord
					? <div className="pure-u-1-4">
						<div className="pure-g full_item">{this.renderFullWord()}</div></div>
					: null}
			</div>
		)
	}
	
	renderFullWord() {
		return (
			<Word wordType="full"
				wordData={this.state.fullWord}
				/>
			)
	}

	renderList() {
		return (
			this.props.wordData.map(val => <div key={val.id.toString()} 
				onClick={() => this.handleWordClick(val)}
				className="pure-u-1-8 grid_item">
			<Word wordType="grid"
				wordName={val.name}
				wordPartOfSpeech={val.partOfSpeech}
				wordMeanings={val.meanings} />
			</div> )
		)
	}
}