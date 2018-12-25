import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator,createAppContainer,createStackNavigator,createSwitchNavigator} from "react-navigation";
import TimelineScreen from "./scenes/TimelineScreen";
import PostScreen from "./scenes/PostScreen";
import ChatScreen from "./scenes/ChatScreen";
import SignUpScreen from "./scenes/SignUpScreen";
import LoginScreen from "./scenes/LoginScreen";
import SettingScreen from "./scenes/SettingScreen";

const TimelineStack = createStackNavigator({
  Timeline:{
    screen:TimelineScreen,
    navigationOptions:{
      title:"Timeline",
    },
    
  }
})

const PostStack = createStackNavigator({
  Post:{
    screen:PostScreen,
    navigationOptions:{
      title:"Post",
    },
  }
})

const ChatStack = createStackNavigator({
  Chat:{
    screen:ChatScreen,
    navigationOptions:{
      title:"Chat",
    },
  }
})

const SettingStack = createStackNavigator({
  Setting:{
    screen:SettingScreen,
    navigationOptions:{
      title:"Setting",
    },
  }
})


const TabScreens = createBottomTabNavigator({
  TimelineStack,
  PostStack,
  ChatStack,
  SettingStack,
})

const App = createAppContainer(TabScreens);

const AccountScreens = createSwitchNavigator({
  Login:{
    screen:LoginScreen,
    navigationOptions:{
      title:"ログイン",
    },
  },
  Tab:{
    screen:TabScreens,
    
  }
})

const SwitchScreens = createAppContainer(AccountScreens);

//export default App;
export default SwitchScreens;
//export default SignUpScreen;