import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FormExample from "./FormExample";

const Card = () => {
  return (
    <View style={styles.card}>
      {/* Título */}
      <Text style={styles.title}>HOLA, CARLOS TORRES</Text>

      {/* Separador */}
      <View style={styles.separator} />

      {/* Párrafo */}
      <Text style={styles.paragraph}>
        Presiona el botón **CONECTARSE A INTERNET** para comenzar a navegar a través de nuestra ZONA WIFI.
      </Text>

      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONECTARSE A INTERNET</Text>
      </TouchableOpacity>
      <FormExample />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 10,
    paddingHorizontal:10,
    width: '98%',
    height: '80%',
    margin:'auto',
    paddingVertical: 50,
    justifyContent: "space-between", 
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  separator: {
    width: "100%",
    height: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 20,
  },
  paragraph: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 10,
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, 
  },
  buttonText: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
  },
});
