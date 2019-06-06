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
export default class ClassTalk extends Component {

  static navigationOptions = {
    header: null,
    };

  render(){
    return(
    <View style={styles.container}>
        <Text style={styles.text}>Módulo: 01</Text>
        <Text  style={styles.text}>Aula: 04</Text>

      <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:25, alignSelf:'center', fontWeight:'bold', color:'#4F96CE'}}>Exercício Lido</Text>
        <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Vivamus molestie bibendum ante. Nulla a lorem vitae dolor laoreet tempor ac vel lorem. 
           Praesent egestas malesuada neque quis vulputate.</Text>
      </View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('ClassCompleted')}>
      <View style={styles.button}>
        <Text style={{fontSize:30, color:'black', alignSelf:'center'}}>RESPONDER</Text>
      </View>
      </TouchableOpacity>



    </View>
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    //justifyContent:'center',
    backgroundColor: '#ffff',
    
  },
  textStyle:{
    fontSize:22,
    color:'black',
    alignSelf:'center',
    margin:15
  },
  text:{
      fontSize:20,
      color:'black',
      fontWeight: 'bold',
      alignSelf:'flex-start',
      marginLeft:10
  },
  button:{
    width:WIDTH-20,
    height:300,
    margin:10,
    borderWidth:1,
    backgroundColor:'#4F96CE',
    justifyContent:'center',
    elevation:10, 
    borderRadius: 10,

  }
  

})