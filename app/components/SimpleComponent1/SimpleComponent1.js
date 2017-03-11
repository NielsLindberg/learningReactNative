import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class SimpleComponent1 extends Component{
	constructor(props){
		super();
		this.state = {
			showMessage: true,
			message: props.message ? props.message: 'Default'
		}
	}
	static defaultProps = {
		message: 'Hello Brad'
	}
	componentWillMount(){
		this.hideMessage();
	}
	hideMessage(){
		this.setState({
			showMessage: true
		});
	}

	render() {
	  return (
	     <View>
	       <Text>{this.state.showMessage ? this.state.message : ''}</Text>
	     </View>
	  );
	}
}

SimpleComponent1.propTypes = {
	message: React.PropTypes.string
}

AppRegistry.registerComponent('SimpleComponent1', () => SimpleComponent1);