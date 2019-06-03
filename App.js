import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {  createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './src/screens/Login';
import HomeBasic from './src/screens/HomeBasic';
import Game from './src/screens/Game';
import CsuiteInit from './src/screens/CsuiteInit';
import TalkInit from './src/screens/TalkInit';
import Ccalc from './src/screens/Ccalc';
import TalkClass from './src/screens/TalkClass';

const AppStackNavigator = createStackNavigator({
  CsuiteInit:{
    screen: CsuiteInit
  },
  Login: {
    screen: Login
    },
  HomeBasic:{
    screen: HomeBasic
  },
  Game:{
    screen: Game
  },
  TalkInit:{
    screen:TalkInit
  },
  Ccalc:{
    screen:Ccalc
  },
  TalkClass:{
    screen: TalkClass
  }
})
    const App= createAppContainer(AppStackNavigator);
    export default App;