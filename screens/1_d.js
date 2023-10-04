import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTilte}>LOGIN</Text>
      </View>
      <SafeAreaView style={styles.containerInputForm}>
        <TextInput placeholder="Email" style={styles.inputForm} />
        <View style={[styles.inputForm, styles.inputFormPassword]}>
          <TextInput placeholder="Password" style={styles.inputPassword} />
          <Image style={styles.iconEye} source={require("../assets/eye.png")} />
        </View>
      </SafeAreaView>
      <View style={styles.containerBtnLogin}>
        <Pressable style={styles.btnLogin}>
          <Text style={styles.textBtnLogin}>LOGIN</Text>
        </Pressable>
      </View>
      <View style={styles.containerNote}>
        <Text style={styles.textNote}>
          When you agree to terms and conditions
        </Text>
        <TouchableOpacity
        // onPress={() => {
        //   /* Xử lý khi nhấn vào liên kết */
        // }}
        >
          <Text style={styles.linkText}>For got your password?</Text>
        </TouchableOpacity>

        <Text style={styles.textNote}>Or login with</Text>
      </View>
      <View style={styles.containerOrtherLogin}>
        <Pressable style={styles.btnFb}>
          <Image source={require("../assets/fb.jpg")} style={styles.imgbtn} />
        </Pressable>
        <Pressable style={styles.btnZalo}>
          <Image source={require("../assets/zalo.png")} style={styles.imgbtn} />
        </Pressable>
        <Pressable style={styles.btnGoogle}>
          <Image
            source={require("../assets/google.png")}
            style={styles.imgbtnGG}
          />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(49, 170, 82, 0.2)"
  },
  containerTitle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  textTilte: {
    fontSize: 25,
    fontWeight: 700
  },

  containerInputForm: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  inputForm: {
    width: "90%",
    height: 54,
    fontSize: 18,
    fontWeight: 400,
    margin: 20,
    borderWidth: 1,
    padding: 15,
    backgroundColor: "#C9E0D0"
  },
  inputFormPassword: {
    flexDirection: "row"
  },
  inputPassword: {
    width: "90%",
    fontSize: 18,
    fontWeight: 400
  },
  iconEye: {
    width: 35
  },

  containerBtnLogin: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  btnLogin: {
    width: "90%",
    height: 54,
    backgroundColor: "rgba(229, 57, 53, 1)",
    justifyContent: "center",
    alignItems: "center"
  },
  textBtnLogin: {
    fontSize: 20,
    fontWeight: 700,
    color: "#FFF"
  },
  containerNote: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  linkText: {
    color: "blue",
    fontSize: 14
  },
  containerOrtherLogin: {
    flex: 2,
    margin: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  btnFb: {
    flex: 1,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25479B"
  },
  btnZalo: {
    flex: 1,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F8EE0"
  },
  btnGoogle: {
    flex: 1,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },
  imgbtn: {
    height: 45,
    width: "100%"
  },
  imgbtnGG: {
    height: 45,
    width: 50
  }
});
