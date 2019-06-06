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
import { Icon } from 'native-base';

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
                <Text style={{alignSelf:'center', color:'white', fontSize:20, fontWeight:'bold'}}>Sign In</Text>
            </View>
            </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <View style={styles.loginGoogle}>
         <Icon type="AntDesign" name="google" style={{color:'white'}}/>
        <Text style={{fontSize:20, marginLeft:10, color:'white'}}>Login with Google</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.loginFacebook}>
        <Icon type="AntDesign" name="facebook-square" style={{color:'white'}}/>
        <Text style={{fontSize:20, marginLeft:10, color:'white'}}>Login with Facebook</Text>
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
      backgroundColor:'#3B5999',
      justifyContent:'center',
      padding:5,
      marginLeft: 50,
      borderRadius:5,
      borderWidth:1,
      elevation:10,
      margin:10
  },
  loginGoogle:{
    backgroundColor:'#DC404B',
    padding:5,
    justifyContent:'center',
    alignSelf:'center',
    flexDirection:'row',
    width:WIDTH-60,
    height:50,
    borderWidth:1,
    margin:10,
    elevation:8,
    borderRadius:5
  },

  loginFacebook:{
    backgroundColor:'#3B5999',
    padding:5,
    justifyContent:'center',
    alignSelf:'center',
    flexDirection:'row',
    width:WIDTH-60,
    height:50,
    borderWidth:1,
    margin:10,
    elevation:8,
    borderRadius:5
  }
})