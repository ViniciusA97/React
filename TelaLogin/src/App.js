/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import style from './style/styles';


class App extends Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
    <>
      <View style={style.container}>
        <View   style ={style.containerImage} >
        <Image source ={require('./assets/hope.png')}/>
        </View>
        <View style={style.containerInput}> 
          <TextInput style ={style.input} placeholder = 'Email' placeholderTextColor= '#4406a3'/>
        </View>
        <View style={style.containerInput}>
          <TextInput style ={style.input} placeholder = 'Senha' placeholderTextColor= '#4406a3' secureTextEntry={true}/>
        </View>
        <TouchableOpacity style={style.button}>
          <Text style={style.text}> ENTRAR </Text>
        </TouchableOpacity>
      </View>
    </>
    );
  }
}



export default App;
