import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Menu = ({ visible }: { visible: boolean }) => {
  if (!visible) return null; // Ocultar el menú si `visible` es falso

  return (
    <View style={styles.container}>
      <View>
        {/* Sección ZONA WIFI */}
        <View style={styles.menuTitle}>
          <Text style={styles.textTitle}>ZONA WIFI</Text>
        </View>
        <View style={styles.elementos}>
          <Text style={styles.text}>CONECTARSE A INTERNET</Text>
          <Text style={styles.text}>RECARGA C2P</Text>
          <Text style={styles.text}>PLANES ZONA-WIFI</Text>
          <Text style={styles.text}>AJUSTES</Text>
        </View>

        {/* Sección INFORMACION */}
        <View style={styles.menuTitle}>
          <Text style={styles.textTitle}>INFORMACION</Text>
        </View>
        <View style={styles.elementos}>
          <Text style={styles.text}>PLANES FIBRA OPTICA</Text>
          <Text style={styles.text}>SOLICITAR SERVICIO</Text>
          <Text style={styles.text}>TERMINOS Y CONDICIONES</Text>
          <Text style={styles.text}>POLITICAS DE PRIVACIDAD</Text>
        </View>

        {/* Sección CLIENTES TECNOSYSTEM */}
        <View style={styles.menuTitle}>
          <Text style={styles.textTitle}>CLIENTES TECNOSYSTEM</Text>
        </View>
        <View style={styles.elementos}>
          <Text style={styles.text}>CLIENTES TECNOSYSTEM</Text>
        </View>

        {/* Sección ACCEDER */}
        <View style={styles.menuTitle}>
          <Text style={styles.textTitle}>ACCEDER</Text>
        </View>
        <View style={styles.elementos}>
          <Text style={styles.text}>CERRAR SESION</Text>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    top: 65,
    left: 0,
    width: "80%",
    height: "80%",
    backgroundColor: "blue", // Fondo con opacidad
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    paddingVertical: 20,
    justifyContent: "flex-start",
  },
  menuTitle: {
    backgroundColor: "white",
    width: "80%",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
  },
  elementos: {
    marginLeft: 30,
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
