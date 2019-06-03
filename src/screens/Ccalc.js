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
export default class Ccalc extends Component {

  static navigationOptions = {
    header: null,
    };

  render(){
    return(
    
    <ImageBackground style={styles.container} source={require('../../resources/img/wallBlue.jpg')}>
       <View style={styles.calcScreen}>
           <Text style={styles.text}>CCALC:</Text>
       </View>
       <TouchableOpacity>
       <View>
            <Image source={require('../../resources/img/mic.png')} 
                style={styles.mic}/>
            <Text style={{fontSize:30, fontWeight:'bold',color:'black',alignSelf:'center', margin: 15}}>Pressione!</Text>
      </View>
      </TouchableOpacity>
    </ImageBackground>
   
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    //justifyContent:'center',
    
  },
  calcScreen:{
      width:WIDTH-20,
      height:200,
      borderWidth:1,
      elevation:10,
      backgroundColor:'rgba(255, 255, 255, .7)',
      alignSelf:'center',
      margin:20,
      elevation:10
  },
  mic:{
      width:200,
      height:200,
      alignSelf: 'center',
      resizeMode:'contain',
      marginTop: 50,
  },
  text:{
      fontSize:20,
      color:'black',
      fontWeight: 'bold',
      alignSelf:'flex-start',
      padding:5
  }
  

})
