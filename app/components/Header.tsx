import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Toast from 'react-native-toast-message';

const Header = ({ toastActive, setToastActive ,result,type }: { toastActive: boolean; setToastActive: React.Dispatch<React.SetStateAction<boolean>>; result: string; type: string | 'success' | 'error'}) => {
  

  useEffect(() => {
    if (toastActive) {
      Toast.show({
        type: type,
        text1: result,
        position: 'top',
       
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 0,

        bottomOffset: 0
      });
      setToastActive(false);  // Restablecer el estado después de mostrar el toast
    }
  }, [toastActive, setToastActive]); // Ejecutar solo cuando toastActive cambie

  return (
    <>
      <View style={styles.header}>

        <Text style={styles.title}>TECNOSYSTEM</Text>
        <Text style={styles.title}>ZONA WIFI</Text>
        <Toast />

      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  toast:{
    zIndex:100,
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    
  },
  header: {
    backgroundColor: "blue",
    height: 60,
    width: "90%", 
    alignSelf: "center", 
    justifyContent: "center", 
    alignItems: "center",
    borderBottomEndRadius: 100, 
    borderBottomStartRadius: 100,
    elevation: 5, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});
