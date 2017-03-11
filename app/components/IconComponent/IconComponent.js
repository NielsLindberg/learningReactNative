import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconComponent extends Component{
	constructor(){
		super();
		this.state = {

		}
	}

	render(){
		return(
			<View>
				<Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
    			Login with Facebook
  			</Icon.Button>
  			<Icon
  				name="user"
  				size={40}
  				color='#3b5998'
  			/>
			</View>
			)
	}
}

AppRegistry.registerComponent('IconComponent', () => IconComponent);