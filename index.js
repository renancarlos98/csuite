/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/Login';
import HomeBasic from './src/screens/HomeBasic';
import Game from './src/screens/Game';
import TalkInit from './src/screens/TalkInit';
import CsuitInit from './src/screens/CsuiteInit';
import Ccalc from './src/screens/Ccalc';
import TalkClass from './src/screens/TalkClass';
AppRegistry.registerComponent(appName, () => App);
