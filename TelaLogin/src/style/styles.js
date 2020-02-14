import {Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:2,
        paddingTop:'20%',
        alignItems:"center",
        backgroundColor: '#fff'
    },
    containerImage:{
        alignItems:'center'
    },
    input:{
        marginTop: '0%',
        width:'90%',
        fontSize: 16,
        fontWeight:'bold',
    },
    containerInput:{
        width:'95%',
        borderBottomColor:'grey',
        borderBottomWidth:0.3,
        marginTop:30,
    },
    button:{
        marginTop:30,
        borderRadius:10,
        justifyContent:'center',
        height:40,
        alignItems:'center',
        width:'95%',
        backgroundColor: '#4406a3'
    },
    text:{
        color:'white',
        fontSize: 15
    }

})

export default styles;