import React, {Component} from 'react';
import {AppRegistry, Text, View, ToolbarAndroid, TouchableHighlight, StyleSheet} from 'react-native';

import AsyncStorageComponent from '../AsyncStorageComponent/AsyncStorageComponent.js';

export default class SceneComponent1 extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.navScene2 = this.navScene2.bind(this);
	}
	navScene2() {
		this.props.navigator.push({
			id: 'scene2'
		});
	}

	render(){
		return(
			<View>
				<ToolbarAndroid style={styles.toolbar} title={this.props.title} />
					<TouchableHighlight onPress={this.navScene2}>
						<Text>Go To Scene 2</Text>
					</TouchableHighlight>
					<AsyncStorageComponent/>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	toolbar: {
		height: 58,
		backgroundColor: '#f6f6f6'
	}
})

AppRegistry.registerComponent('SceneComponent1', () => SceneComponent1);