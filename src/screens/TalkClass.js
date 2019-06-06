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
export default class TalkClass extends Component {

  static navigationOptions = {
    header: null,
    };

  render(){
    return(
    <View style={styles.container}>
        <Text style={styles.title}>MODULES:</Text>
        <View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ClassTalk')}>
            <View style={styles.module}>
                <Text style={styles.text}>Module 1</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ClassTalk')}>
            <View style={styles.module}>
                <Text style={styles.text}>Module 2</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ClassTalk')}>
            <View style={styles.module}>
                <Text style={styles.text}>Module 3</Text>
            </View>
            </TouchableOpacity>
        </View>
    </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'white'
  },
  module:{
      width:WIDTH-20,
      height: 150,
      backgroundColor:'#3B5999',
      margin:15,
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent:'center',
      elevation:10


  },
  title:{
      alignSelf:'center',
      fontSize: 30,
      color:'black',
      fontWeight: 'bold',
      borderBottomWidth: 1,
      
  },
  text:{
    alignSelf:'center',
    fontSize: 30,
    color:'white',
    fontWeight: 'bold',
},

  
})
