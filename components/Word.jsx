import React from 'react'

export default class Word extends React.Component {
	constructor(props) {
		super(props)
	}

	partOfSpeechShort(s) { //Abbreviate parts of speech
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

	setMeanings(a, d) { //1D or 2D array of meanings, full display boolean d
		//a: array, i: index, s: string output, p: part of speech
		//Shorten to 4 items for 1D array, add "..." if longer
		let p = !d ? this.props.wordPartOfSpeech : this.props.wordData.partOfSpeech
		if (typeof a[0] === 'string') {
			if (a.length > 4 && !d) {
				a.splice(4)
				return `[${this.partOfSpeechShort(p[0])}] ${a.join(', ')}...`
			}
			return `[${this.partOfSpeechShort(p[0])}] ${a.join(', ')}`
		}
		//Limit to 50 characters instead of 4 words
		else {
			let s = ``
			for (let i = 0; i < a.length; i++) {
				if (s.length < 50 && !d) { s += (i == a.length - 1) 
					? `[${this.partOfSpeechShort(p[i])}] ${(a[i].join(', '))}`
					: `[${this.partOfSpeechShort(p[i])}] ${(a[i].join(', '))} ` }
				else if (d) {
					s += `[${this.partOfSpeechShort(p[i])}] ${(a[i].join(', '))} `
				}
			}
			return s
		}
	}

	setPartOfSpeech(a, d) { //1D array of meanings, full display boolean d
		return a.map(e => this.partOfSpeechShort(e)).join(' | ')
	}
	
	render() {
		if (this.props.wordType == "grid") {
			return (
			<div className="pure-g grid_word">
				<div className="pure-u-1 word_name">{this.props.wordName}</div>
				<div className="pure-u-1 word_partOfSpeech">{this.setPartOfSpeech(this.props.wordPartOfSpeech, 0)}</div>
				<div className="pure-u-1 word_meanings">{this.setMeanings(this.props.wordMeanings, 0)}</div>
			</div>
			)
		} else if (this.props.wordType == "list") {

		} else if (this.props.wordType == "full") {
			let wordData = this.props.wordData
			return (
			<div className="pure-g full_word">
				<div className="pure-u-1 word_name">{wordData.name}</div>
				<div className="pure-u-1 word_partOfSpeech">Parts of Speech: {this.setPartOfSpeech(wordData.partOfSpeech, 1)}</div>
				<div className="pure-u-1 word_meanings">Meanings: {this.setMeanings(wordData.meanings, 1)}</div>
				<div className="pure-u-1 word_id">ID: {wordData.id}</div>
			</div>
			)
		}
		else {
			return <div></div>
		}	
	}
}