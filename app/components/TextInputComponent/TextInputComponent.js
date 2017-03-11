import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput} from 'react-native';

export default class TextInputComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			value: this.props.value,
		}
	}

	static defaultProps = {
		value: 'Hello World'
	}

	onChangeText(value) {
		this.setState({
			value: value
		});
	}

	onSubmitEditing(e) {
		console.log('onSubmitEdditing Called: '+ e);
	}

	onBlur(e) {
	}

	onFocus(e) {
	}

	render(){
		return(
			<View>
				<TextInput
					placeholder="Type Something"
					value={this.state.value}
					selectionColor='red'
					selectTextOnFocus={false}
					maxLength={30}
					onFocus={(e) => this.onFocus(e)}
					onBlur={(e) => this.onBlur(e)}
					onChangeText={(value) => this.onChangeText(value)}
					onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
				/>
				<Text>{this.state.value}</Text>
			</View>

			)
	}
}

AppRegistry.registerComponent('TextInputComponent', () => TextInputComponent);