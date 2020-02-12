import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex:1,
    //flex 1 significa que o container oculpa todo espaço da tela 
    backgroundColor : '#0066cc',
    justifyContent: 'center',
    //alinhamento vertical
    alignItems: 'center'
    //alinhamento horizontal
  },
  texto:{
    color: '#fff',
    fontSize: 23
  },
  slogan:{
    color:'#fff',
  }
});

export default styles;