// Import các thành phần cần sử dụng từ thư viện
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Button } from "react-native-web";

// Component chính của ứng dụng
export default function App() {
  return (
    <View style={styles.container}>
      {" "}
      {/* logo */}{" "}
      <Image
        style={styles.logo}
        source={require("../assets/lock-152879 1.png")}
      />{" "}
      {/* tiêu đề */}{" "}
      <Text style={styles.text1}>
        FORGET {"\n"}
        PASSWORD{" "}
      </Text>{" "}
      {/* mô tả */}{" "}
      <Text style={styles.text2}>
        Provide your account’ s email for which you {"\n"}
        want to reset your password{" "}
      </Text>{" "}
      {/* email */}{" "}
      <View style={styles.box}>
        <Image
          source={require("../assets/Layerx00201.png")} // Đường dẫn đến hình ảnh
          style={styles.leftIcon} // Kiểu dáng của hình ảnh
        />{" "}
        <TextInput
          placeholder="Email"
          style={styles.textinput}
          keyboardType="email-address"
          // onChangeText={(text) => {}} // Xử lý sự thay đổi giá trị của inpu
        />
      </View>{" "}
      {/* button */}{" "}
      <View style={styles.btngroup}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text3}> NEXT </Text>{" "}
          </View>{" "}
        </TouchableOpacity>{" "}
      </View>{" "}
    </View>
  );
}

// Định nghĩa các kiểu dáng và style sử dụng trong ứng dụng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage:
      "linear-gradient(180deg, #C7F4F6 0%, #D1F4F6 25%, #E5F4F5 50%, #E5F4F5 75%, #00CCF9 100%)",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: {
    width: 105,
    height: 117,
  },
  text1: {
    fontSize: 25,
    fontStyle: "Roboto",
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
  },
  text2: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
  },

  btngroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%", // Chiều rộng tối đa
  },
  btn: {
    width: 350,
    height: 45,
    backgroundColor: "#E3C000",
    alignItems: "center",
    justifyContent: "center",
  },
  text3: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  box: {
    flexDirection: "row", // Đặt flex-direction là "row" để các phần tử con nằm trên cùng một dòng
    width: 295,
    height: 45,
    backgroundColor: "#C4C4C4",
  },
  textinput: {
    flex: 1, // Đặt flex = 1 để TextInput chiếm hết phần còn lại của View cha
    FontSize: 15,
  },
  leftIcon: {
    width: 48,
    height: 45,
  },
});
