import React, {Component} from 'react';
import {AppRegistry, Text, View, AsyncStorage, TextInput} from 'react-native';

export default class AsyncStorageComponent extends Component{
	constructor(){
		super();
		this.state = {
			name: ''
		}
	}

	saveName(value){
		AsyncStorage.setItem('name', value);
		this.setState({name: value});
	}

	getName(){
		AsyncStorage.getItem('name').then((value) => {
			this.setState({name: value});
		})
	}

	componentWillMount(){
		this.getName();
	}
	render(){
		return(
			<View>
				<TextInput
					placeholder="Type Name"
					onSubmitEditing={(e) => this.saveName(e.nativeEvent.text)}
				/>
				<Text>{this.state.name}</Text>
			</View>
			)
	}
}

AppRegistry.registerComponent('AsyncStorageComponent', () => AsyncStorageComponent);