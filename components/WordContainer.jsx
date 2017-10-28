import React from 'react'

import GridView from './GridView.jsx'
import ListView from './ListView.jsx'

export default class WordContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			viewType: "grid"
		}
	}

	componentDidMount() {
		this.setState({
			queryData: function() {
				//return wordData from MongoDB
			}
		})
	}

	render() {
		const viewType = this.state.viewType
		const data = [{
				name: "ba-se-yo",
				partOfSpeech: ["verb"],
				meanings: ["to be"],
				id: 1
			},
			{
				name: "da-ka-to",
				partOfSpeech: ["verb"],
				meanings: ["to have", "to own", "to possess"],
				id: 2
			},
			{
				name: "tse-ta-ke",
				partOfSpeech: ["noun"],
				meanings: ["happiness", "good", "positive"],
				id: 3
			},
			{
				name: "ko-ja",
				partOfSpeech: ["verb", "adjective"],
				meanings: [["add", "join"], ["more"]],
				id: 4
			},
			{
				name: "je",
				partOfSpeech: ["noun"],
				meanings: ["zero","none","void"],
				id: 5
			},
			{
				name: "ko-ni-to",
				partOfSpeech: ["verb"],
				meanings: ["to do", "to create"],
				id: 6
			},
			{
				name: "na",
				partOfSpeech: ["pronoun"],
				meanings: ["I", "self", "me", "own body", "being"],
				id: 7
			},
			{
				name: "ka",
				partOfSpeech: ["pronoun"],
				meanings: ["you", "other"],
				id: 8
			},
			{
				name: "te-st-ing",
				partOfSpeech: ["interjection", "preposition"],
				meanings: [["hello", "hi"],["goodbye","later"]],
				id: 9
			}
			]

		if (viewType == "grid") {
			return ( 
				<div className="pure-g grid_view"><GridView wordData={data} /></div>
				)

		}

		else if (viewType == "list") {
			return <ListView />
		}
	}
}