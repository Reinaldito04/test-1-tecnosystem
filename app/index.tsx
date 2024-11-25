import React, { useState } from "react";
import { View,ScrollView, } from "react-native";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Index() {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Estado para el menú

  return (
    <ScrollView style={{ flex: 1 }} 
    >
      {/* Pasamos el estado y la función de control al Navbar */}
      <Navbar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
      {/* Pasamos el estado al menú */}
      <Menu visible={isMenuVisible} />
      <Header />
      <Card />
    </ScrollView>
  );
}
