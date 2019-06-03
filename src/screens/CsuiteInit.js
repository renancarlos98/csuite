import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  AsyncStorage,
  TouchEvent,
  ImageBackground
} from 'react-native';

const {width: WIDTH} = Dimensions.get('screen')
export default class Login extends Component {

  static navigationOptions = {
    header: null,
    };

  render(){
    return(
    <ImageBackground style={styles.container} source={require('../../resources/img/bluWall.jpg')}>
      <View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('TalkInit')}>
            <Image style={styles.logo} source={require('../../resources/img/talkAtive2.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ccalc')}>
            <Image style={styles.logo} source={require('../../resources/img/cCalc.jpg')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Image style={styles.logo} source={require('../../resources/img/logo.png')}/>
          </TouchableOpacity>
      </View>
    </ImageBackground>
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#4F96CE',
    
  },
  logo:{
      width:WIDTH-30,
      height:190,
      margin: 5,
      borderRadius:20,
      alignSelf: 'center',
      
      
  },
  
})