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
  ImageBackground
} from 'react-native';

const {width: WIDTH} = Dimensions.get('screen')
export default class Game extends Component {

    static navigationOptions = {
        header: null,
        };

  render(){
    return(
    <ImageBackground style={styles.container} source={require('../../resources/img/bluWall.jpg')}>
     <View style={styles.problemField}>
        <Text style={styles.headerQuest}>Questão: </Text>
     </View>
     <View style={styles.optionField}>
       <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.text}>Repetir</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.text}>Responder</Text>
        </View>
        </TouchableOpacity>
     </View>
     <View>
         <Text style={styles.time}> Tempo 00:30</Text>
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
  problemField:{
      width:WIDTH-40,
      height:150,
      margin:10,
      backgroundColor:'white',
      borderRadius: 20,
      borderWidth: 1,
      alignSelf:'center',
      elevation:10
  },
  headerQuest:{
    fontSize:22,
    padding:10,
    color:'white',
    backgroundColor:'black',
    borderTopRightRadius: 19,
    borderTopLeftRadius: 19,
    borderBottomWidth: 1,  
  },
  button:{
      width:150,
      height:320,
      borderRadius:20,
      borderWidth:2,
      backgroundColor:'rgba(255, 255, 255, .7)',
      justifyContent: 'center',
      margin:10,
      elevation:10,
      padding:5
  },
  optionField:{
    flexDirection:'row',
    justifyContent:'center'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
    color:'black',
    
  },
  time:{
      alignSelf:'center',
      fontWeight:'bold',
      fontSize:40,
      margin:10,
      color:'black'
      
    
  }
 

})