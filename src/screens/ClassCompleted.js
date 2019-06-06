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
import { Container, Header, Content, Icon } from 'native-base';

const {width: WIDTH} = Dimensions.get('screen')
const {height: HEIGHT} = Dimensions.get('screen')
export default class ClassCompleted extends Component {

  static navigationOptions = {
    header: null,
    };

  render(){
    return(
    <View style={styles.container}>
        <Text style={styles.text}>Módulo: 01</Text>
        <Text  style={styles.text}>Aula: 04</Text>
        

      <View style={{justifyContent:'center'}}>
        <Text style={{fontSize:25, alignSelf:'center', fontWeight:'bold', color:'#4F96CE', marginTop:70}}>AULA CONCLUÍDA</Text>
        <Icon type="Entypo" name="check" style={{fontSize:100, alignSelf:'center'}}/>
      </View>
      <TouchableOpacity>
      <View style={styles.button}>
        <Text style={{fontSize:30, color:'black', alignSelf:'center'}}>PRÓXIMA AULA</Text>
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
    backgroundColor: 'white',
    
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
      marginLeft:10,
      
  },
  button:{
    alignSelf:'center',
    width:WIDTH-20,
    height:300,
    margin:10,
    borderWidth:1,
    backgroundColor:'#4F96CE',
    justifyContent:'center',
    elevation:10, 
    borderRadius: 10,
  },
  logo:{
      alignSelf:'flex-end',
      width:60,
      height:60,
      margin:10
      
  }
  

})