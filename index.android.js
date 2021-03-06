import React, {Component} from 'react';
import {AppRegistry, Text, View, Navigator} from 'react-native';

import SimpleComponent1 from './app/components/SimpleComponent1/SimpleComponent1.js';
import TextInputComponent from './app/components/TextInputComponent/TextInputComponent.js';
import SliderComponent from './app/components/SliderComponent/SliderComponent.js';
import PickerComponent from './app/components/PickerComponent/PickerComponent.js';
import ScrollViewComponent from './app/components/ScrollViewComponent/ScrollViewComponent.js';
import SwitchComponent from './app/components/SwitchComponent/SwitchComponent.js';
import StyledComponent from './app/components/StyledComponent/StyledComponent.js';
import FlexComponent from './app/components/FlexComponent/FlexComponent.js';
import FlexComponent2 from './app/components/FlexComponent2/FlexComponent2.js';
import TouchableComponent from './app/components/TouchableComponent/TouchableComponent.js';
import ButtonComponent from './app/components/ButtonComponent/ButtonComponent.js';
import StatusBarComponent from './app/components/StatusBarComponent/StatusBarComponent.js';
import ToolbarAndroidComponent from './app/components/ToolbarAndroidComponent/ToolbarAndroidComponent.js';
import IconComponent from './app/components/IconComponent/IconComponent.js';
import ListViewComponent from './app/components/ListViewComponent/ListViewComponent.js';
import FetchComponent from './app/components/FetchComponent/FetchComponent.js';
import SceneComponent1 from './app/components/SceneComponents/SceneComponent1.js';
import SceneComponent2 from './app/components/SceneComponents/SceneComponent2.js';


export default class mymobileapp extends Component{
  renderScene(route, navigator) {
    switch(route.id) {
      case 'scene1':
        return (<SceneComponent1 navigator={navigator} title="scene1" />)
      case 'scene2':
        return (<SceneComponent2 navigator={navigator} title="scene2" />)
    }
  }

  render() {
    return (
        <Navigator
          initialRoute={{id: 'scene1'}}
          renderScene={this.renderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
        />
      );
  }
}

AppRegistry.registerComponent('mymobileapp', () => mymobileapp);