import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'

import api from '../utils/apiservice.jsx'

const FormExample = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:50}}>
      <TextInput placeholder='Username'  style={styles.input}/>
      <TextInput placeholder='Password' style={styles.input} />
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>

      </TouchableOpacity>
    </View>
  )
}

export default FormExample

const styles = StyleSheet.create({
    input: {
        borderWidth:1,
        borderColor:'gray',
        padding:10,
        margin:10,
        color:'white',
        borderRadius:15
        
    }
    ,
    button: {   
        backgroundColor:'blue',
        padding:10,
        margin:10,
        borderRadius:15,
        paddingHorizontal:20
    },
    buttonText: {
        color:'white',
        textAlign:'center'
    }
})