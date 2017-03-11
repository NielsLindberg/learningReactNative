import React, {Component} from 'react';
import {
	AppRegistry, 
	Text, 
	View, 
	CameraRoll, 
	Image, 
	ScrollView, 
	StyleSheet, 
	ToolbarAndroid,
	ActivityIndicator
} from 'react-native';

export default class CameraRollComponent extends Component{
	constructor(){
		super();
		this.state = {
			images: [],
			imagesLoaded: false
		}
	}

	componentWillMount(){
		CameraRoll.getPhotos({first: 5}).then((data) => {
			const assets = data.edges;
			const images = assets.map((asset) => asset.node.image);
			this.setState({
				imagesLoaded: true,
				images: images
			});
		},
		(error) => {
			console.log(error);
		});
	}

	render(){
		if(!this.state.imagesLoaded){
			return (
				<ActivityIndicator
					style={[styles.centering, styles.grey]}
					size='large'
					color='black'
				/>
				)
		}
		return(
			<View>
				<ScrollView style={styles.container}>
					<View style={styles.imageGrid}>
						{this.state.images.map((image) => <Image style={styles.image} key={image.uri} source={{uri: image.uri}} />)}
					</View>
					<Text>CameraRollComponent</Text>
				</ScrollView>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	imageGrid: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		marginTop: 10
	},
	image: {
		width: 180,
		height: 180
	},
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8
	},
	grey: {
		backgroundColor: '#cccccc'
	}
})
AppRegistry.registerComponent('CameraRollComponent', () => CameraRollComponent);