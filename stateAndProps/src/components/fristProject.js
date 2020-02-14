/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

  
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

  import styles from '../styles/stl';
  import Welcome from './welcome';



class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      slogan: ''
    }
  }

  change =()=>{this.setState({slogan: this.state.slogan ? '' : 'aq tem slogan'});};

  //Chamando Welcome com props
  //<Welcome
        //titulo = 'titulo'
        //slogan = 'slogan'
        //titulo e slogan são props que foram passados de outro components
      ///>

  render(){
  return (
    <>
    <View style={styles.container}> 
      <TouchableOpacity onPress={()=>this.change()} >
        <Text> change </Text>
      </TouchableOpacity>
      <Text style={styles.texto}> {this.state.slogan} </Text>
    </View>
      
    </>
  );
}
}

export default App;
