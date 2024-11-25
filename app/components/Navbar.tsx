import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FaBars } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";

const Navbar = ({ isMenuVisible, setIsMenuVisible }: { isMenuVisible: boolean; setIsMenuVisible: (value: boolean) => void }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => setIsMenuVisible(!isMenuVisible)}>
        <FaBars style={styles.icon} />
      </TouchableOpacity>

      <Image
        source={{
          uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        }}
        style={styles.profileImage}
        resizeMode="cover"
      />

      <IoIosNotifications style={styles.icon} />
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 4,
    borderBottomColor: "violet",
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
