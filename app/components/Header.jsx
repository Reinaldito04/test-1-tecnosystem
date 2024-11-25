import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Toast from 'react-native-toast-message';

const Header = ({toastActive}) => {
    useEffect(() => {
      if (toastActive) {
        Toast.show({
          type: 'success',
          text1: 'Inicio de sesión exitoso',
          position: 'bottom',
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      }
    })
  return (
    <>
    <Toast />
    
    <View style={styles.header}>
      <Text style={styles.title}>TECNOSYSTEM </Text>
      <Text style={styles.title}>ZONA WIFI</Text>
    </View>
    </>

  );
};

export default Header;

const styles = StyleSheet.create({
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
