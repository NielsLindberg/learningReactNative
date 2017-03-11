import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ToolbarAndroid, TouchableHighlight} from 'react-native';
import CameraRollComponent from '../CameraRollComponent/CameraRollComponent.js';

export default class SceneComponent2 extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
		this.navScene1 = this.navScene1.bind(this);
	}
	navScene1() {
		this.props.navigator.push({
			id: 'scene1'
		});
	}

	render(){
		return(
			<View>
				<ToolbarAndroid style={styles.toolbar} title={this.props.title} />
					<TouchableHighlight onPress={this.navScene1}>
						<Text>Go To Scene 1</Text>
					</TouchableHighlight>
					<CameraRollComponent/>
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


AppRegistry.registerComponent('SceneComponent2', () => SceneComponent2);