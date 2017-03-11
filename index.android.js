import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

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


export default class mymobileapp extends Component{
  render() {
    return (
      <View>
        <StatusBarComponent barColor='red'/>
        <ToolbarAndroidComponent/>
        <ButtonComponent/>
      </View>
      );
  }
}

AppRegistry.registerComponent('mymobileapp', () => mymobileapp);