import React, {Component} from 'react';
import {AppRegistry, Text, View, Clipboard} from 'react-native';

export default class ClipboardComponent extends Component{
	constructor(){
		super();
		this.state = {
			text: 'nothing'
		}

		this.setClipboardText = this.setClipboardText.bind(this);
		this.getClipboardText = this.getClipboardText.bind(this);
	}

	getClipboardText(){
		Clipboard.getString().then((text) => {
			this.setState({text: text});
		});
	}

	setClipboardText(){
		Clipboard.setString('Hello from clipboard');
		this.getClipboardText();
	}

	render(){
		return(
			<View>
				<Text onPress={this.setClipboardText}>
				Tap here
				</Text>
				<Text style={{color:'green', margin: 20}}>
					{this.state.text}
				</Text>
			</View>
			)
	}
}

AppRegistry.registerComponent('ClipboardComponent', () => ClipboardComponent);