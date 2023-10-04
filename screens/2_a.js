import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  Pressable,
  TouchableOpacity
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>LOGIN</Text>
      </View>
      <View style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Image
            style={styles.imgFirst}
            source={require("../assets/avatar_user 1.png")}
            resizeMode="contain"
          />
          <TextInput style={styles.txtName} placeholder="Name" />
        </View>
        <View style={styles.containerInput}>
          <Image
            style={styles.imgFirst}
            source={require("../assets/Group.png")}
            resizeMode="contain"
          />

          <TextInput style={styles.txtPassword} placeholder="Password" />
          <Image
            style={styles.imgeye}
            source={require("../assets/eye.png")}
            resizeMode="contain"
          />
        </View>
      </View>

      <View style={styles.containerEnd}>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textBtnLogin}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerCreateAccount}>
          <Text style={styles.textCreateAccount}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBCB00"
  },
  containerTitle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 35
  },
  textTitle: {
    fontSize: "30px",
    color: "#000000",
    fontWeight: "bold",
    marginTop: 82
  },
  containerForm: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  //thanh input
  containerInput: {
    flexDirection: "row",
    marginBottom: 20,
    width: "90%",
    height: 54,
    alignItems: "center",
    backgroundColor: "#DDBE3C",
    //Viền Input
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1
  },
  imgFirst: {
    flex: 1,
    width: 32,
    height: 32
  },
  imgeye: {
    flex: 2,
    width: 32,
    height: 32
  },

  txtName: {
    flex: 9,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "roboto",
    marginLeft: 10
  },
  txtPassword: {
    flex: 7,
    fontSize: 18,
    fontWeight: 400,
    fontFamily: "roboto",
    marginLeft: 10
  },
  containerEnd: {
    flex: 3,
    alignItems: "center"
  },
  btnLogin: {
    width: "90%",
    height: 45,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  textBtnLogin: {
    fontSize: 20,
    color: "white",
    fontWeight: 700
  },
  containerCreateAccount: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  textCreateAccount: {
    fontSize: 20,
    fontWeight: "bold",
    fontWeight: 700,
    marginTop: 30
  }
});
