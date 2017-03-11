import React, {Component} from 'react';
import {AppRegistry, Text, View, Button, Alert, StyleSheet} from 'react-native';

const alertMessage = 'This is your message';

export default class ButtonComponent extends Component{
	constructor(){
		super();
		this.state = {

		}
	}

	btnPress(){
		Alert.alert('Alert Title', alertMessage, [
			{text: 'Cancel', onPress: () => console.log('Cancel')},
			{text: 'Ok', onPress: () => console.log('Ok Pressed')}]);
	}

	render(){
		return(
			<View>
				<Button
					onPress={this.btnPress}
					title="Learn More"
					color="violet"
					accessibilityLabel="This is a standard button"
				/>
				<Button
					onPress={this.btnPress}
					title="Learn More"
					color="coral"
					accessibilityLabel="This is a standard button"
					disabled={true}
				/>
				<View style={styles.bottomContainer}>
					<Button
						onPress={this.btnPress}
						title="Learn More"
						color="violet"
						accessibilityLabel="This is a standard button"
					/>
					<Button
						onPress={this.btnPress}
						title="Learn More"
						color="coral"
						accessibilityLabel="This is a standard button"
					/>
				</View>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start'
	}
})

AppRegistry.registerComponent('ButtonComponent', () => ButtonComponent);