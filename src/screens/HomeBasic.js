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
export default class HomeBasic extends Component {

  static navigationOptions = {
    header: null,
    };

  render(){
    return(
    <ImageBackground style={styles.container} source={require('../../resources/img/bluWall.jpg')}>
     <View style={styles.header}>
        <Text style={styles.text}>Escolha a dificuldade: </Text>
     </View>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
     <View style={styles.buttonLevel}> 
        <Text style={styles.textLevel}>Fácil</Text>
     </View> 
     </TouchableOpacity>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
     <View style={styles.buttonLevel}>
        <Text style={styles.textLevel}>Intemediário</Text>
     </View>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => this.props.navigation.navigate('Game')}>
     <View style={styles.buttonLevel}>
        <Text style={styles.textLevel}>Difícil</Text>
     </View>
     </TouchableOpacity>
    </ImageBackground>
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#4F96CE',
  },
  buttonLevel:{
      width:WIDTH-20,
      height:170,
      borderWidth: 2,
      borderRadius:30,
      margin:10,
      justifyContent:'center',
      backgroundColor:'rgba(255, 255, 255, .5)',
      elevation:10,
      justifyContent:'center',
      
  },
  header:{
    width:WIDTH,
    height:45,
    backgroundColor:'white',
    elevation:10,
    
  },
  text:{
    fontSize:25,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 5,
    color:'black'
  },
  textLevel:{
    fontSize:30,
    fontWeight:'bold',
    alignSelf:'center',
    color:'black'
    
  }
 

})