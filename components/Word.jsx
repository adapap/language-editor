import React from 'react'

export default class Word extends React.Component {
	constructor(props) {
		super(props)
	}

	partOfSpeechShort(s) {
		const key = {
			'noun': 'n.',
			'verb': 'v.',
			'adjective': 'adj.',
			'adverb': 'adv.',
			'pronoun': 'pron.',
			'preposition': 'prep.',
			'conjunction': 'conj.',
			'interjection': 'interj.'
		}
		return key[s]
	}

	setMeanings(a) { //1D or 2D array of meanings
		//a: array, i: index, s: string output, p: part of speech
		//Shorten to 4 items for 1D array
		let p = this.props.wordPartOfSpeech
		if (typeof a[0] === 'string') {
			if (a.length > 4) {
				a.splice(4)
				return `[${this.partOfSpeechShort(p[0])}] ${a.join(', ')}...`
			}
			return `[${this.partOfSpeechShort(p[0])}] ${a.join(', ')}`
		}
		else {
			let s = ``
			for (let i = 0; i < a.length; i++) {
				if (s.length < 50) { s += (i == a.length - 1) 
					? `[${this.partOfSpeechShort(p[i])}] ${(a[i].join(', '))}`
					: `[${this.partOfSpeechShort(p[i])}] ${(a[i].join(', '))} ` }
			}
			return s
		}
	}

	setPartOfSpeech(a) { //1D array of meanings
		return a.map(e => this.partOfSpeechShort(e)).join(' | ')
	}

	render() {
		if (this.props.wordType == "grid") {
			return (
			<div className="pure-g">
				<div className="pure-u-1 word_name">{this.props.wordName}</div>
				<div className="pure-u-1 word_partOfSpeech">{this.setPartOfSpeech(this.props.wordPartOfSpeech)}</div>
				<div className="pure-u-1 word_meanings">{this.setMeanings(this.props.wordMeanings)}</div>
			</div>
			)
		} else if (this.props.wordType == "list") {

		} else if (this.props.wordType == "full") {
			
		}
		
	}
}