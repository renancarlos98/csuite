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
  CheckBox
} from 'react-native';



const {width: WIDTH} = Dimensions.get('screen')
export default class TalkInit extends Component {

  static navigationOptions = {
    header: null,
    };

    constructor(){
        super();
        this.state={
            check:false
        }
    }
    checkBox(){
        this.setState({
            check:!this.state.check
        })
    }

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.loginArea}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput style={styles.input} placeholder='Username'/>
        <TextInput style={styles.input} placeholder='Password'/>
        <View style={{flexDirection: 'row'}}>
            <CheckBox size={30}value={this.state.check} onChange={()=> this.checkBox()}/>
            <Text style={styles.check}>Remember Me</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('TalkClass')}>
            <View style={styles.sign}>
                <Text style={{alignSelf:'center', color:'black', fontSize:20, fontWeight:'bold'}}>Sign In</Text>
            </View>
            </TouchableOpacity>
            
        </View>

        
      </View>
    </View>
    );
  }
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center'
  }, 
  loginArea:{
      width:WIDTH-40,
      height:400,
      borderWidth: 1,
      margin:20,
      elevation:2,
      
  },
  input:{
    width:300,
    height:50,
    margin:10,
    borderWidth:1,
    borderRadius:5,
    elevation:1
  },
  title:{
      alignSelf:'center',
      fontSize:25,
      padding: 5,
      color:'black',
      fontWeight: 'bold',
  },
  check:{
      fontSize:15,
      color:'black',
      padding:3
  },
  sign:{
      width:120,
      height:50,
      backgroundColor:'gray',
      justifyContent:'center',
      padding:5,
      marginLeft: 50,
      borderRadius:5,
      borderWidth:1,
      elevation:10,
      margin:10
  },
  

  

})