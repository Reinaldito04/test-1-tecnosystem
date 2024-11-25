import React, { useState } from "react";
import { View,ScrollView, } from "react-native";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Card from "./components/Card";

export default function Index() {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Estado para el menú
  const [toastActive, setToastActive] = useState(false); // Estado para el toastcl
  const [result, setResult] = useState(""); // Estado para el toastcl
  const [type, setType] = useState(""); // Estado para el toastcl
  return (
    <ScrollView style={{ flex: 1 }} 
    >
      {/* Pasamos el estado y la función de control al Navbar */}
      <Navbar isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
      {/* Pasamos el estado al menú */}
      <Menu visible={isMenuVisible} />
      <Header result={result} toastActive={toastActive} setToastActive={setToastActive} type={type} />
      <Card  result={result} toastActive={toastActive} setToastActive={setToastActive} type={type} setResult={setResult} setType={setType} />
    </ScrollView>
  );
}
