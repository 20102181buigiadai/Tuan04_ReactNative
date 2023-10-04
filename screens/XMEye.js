// Cài đặt thư viện react-native-svg bằng lệnh sau:
// npm install react-native-svg --save

/******* */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ResizeMode
} from "react-native";
import { TextInput } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTittle}>
        <Image
          style={styles.imgTittle}
          source={require("../assets/eyeball-309797 1.svg")}
        />
      </View>
      <View style={styles.containerFormInput}>
        <View style={styles.containerInput}>
          <Image
            style={styles.imgInput}
            source={require("../assets/Group 3.svg")}
            resizeMode="contain"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Please input user name"
            placeholderTextColor="#D3D3D3"
          />
        </View>
        <View style={styles.containerInput}>
          <Image
            style={styles.imgInput}
            source={require("../assets/Group 5.png")}
            resizeMode="contain"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Please input password"
            placeholderTextColor="#D3D3D3"
          />
        </View>
      </View>
      <View style={styles.containerRegister}>
        <TouchableOpacity style={styles.btnLogin}>
          <Text
            style={{
              fontSize: 18,
              color: "white",
              fontFamily: "roboto",
              fontWeight: 400
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <View style={styles.register}>
          <TouchableOpacity style={styles.textRegister}>
            Register
          </TouchableOpacity>
          <TouchableOpacity style={styles.textRegister}>
            Forgot Password
          </TouchableOpacity>
        </View>
        <View style={styles.containerOtherLogin}>
          <View style={styles.horizontalLine}> </View>
          <Text style={styles.textOtherLogin}>Other Login Methods</Text>
          <View style={styles.horizontalLine}> </View>
        </View>
        <View style={styles.containerImgOtherLogin}>
          <TouchableOpacity>
            <Image
              style={styles.imgOtherLogin}
              source={require("../assets/Group 8.svg")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imgOtherLogin}
              source={require("../assets/Group 9.svg")}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imgOtherLogin}
              source={require("../assets/Group 8.svg")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  //tiêu đề (ảnh)
  containerTittle: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center"
  },
  imgTittle: {
    width: 140,
    height: 140
  },

  containerFormInput: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  //thanh input
  containerInput: {
    flex: 1,
    width: "300px",
    flexDirection: "row",
    marginBottom: 40,
    marginTop: 30,
    //Border
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    borderStyle: "solid"
  },
  imgInput: {
    flex: 1,
    width: 30,
    height: 30,
    alignItems: "center",
    marginBottom: 50
  },
  textInput: {
    flex: 9,
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: 400
  },
  containerRegister: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30
  },
  //nút đăng nhập
  btnLogin: {
    backgroundColor: "#386FFC",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: "80%",
    borderRadius: 10
  },
  //register &&  Forgot Password
  register: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around"
  },
  textRegister: {
    fontSize: 18,
    fontFamily: "roboto",
    fontWeight: 400
  },

  // OtherLogin
  containerOtherLogin: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%"
  },
  textOtherLogin: {
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: 400
  },
  horizontalLine: {
    // gạch ngang hai bên
    flex: 1,
    height: 1,
    backgroundColor: "#0E18F5",
    marginHorizontal: 5 // Khoảng cách giữa văn bản và đường gạch.
  },
  //imgOtherLogin
  containerImgOtherLogin: {
    flexDirection: "row",
    alignItems: "stretch",
    width: "80%",
    justifyContent: "space-between"
  },
  imgOtherLogin: {
    height: 74,
    width: 74
  }
});
