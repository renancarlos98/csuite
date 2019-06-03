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
      <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeBasic')}>
        <View style={styles.initButton}>
          <Image style={styles.logo} source={require('../../resources/img/Basics.png')}/>
          <Text style={styles.font}>Aperte para continuar!</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  },
  initButton:{
    width: WIDTH-20,
    height: 550,
    margin:10,
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:50,
    borderWidth:3,
    elevation:10
  },
  logo:{
    width:170,
    height:220,
    alignSelf:'center',
    position:'relative'
  },
  font:{
    top:30,
    margin:10,
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 20,
    color:'black'
  }

})
