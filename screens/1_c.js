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
      {/* logo */} <Text style={styles.logo}> CODE </Text> {/* tiêu đề */}{" "}
      <Text style={styles.text1}>VERIFICATION </Text> {/* mô tả */}{" "}
      <Text style={styles.text2}>
        Enter ontime password sent on {"\n"}++849092605798{" "}
      </Text>{" "}
      {/* Box */}
      <View style={styles.box}>
        {/* các hộp rỗng */}
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>{" "}
      {/* button */} {/* submit */}
      <View style={styles.btngroup}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text3}> VERIFY CODE </Text>{" "}
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
    height: 70,
    fontSize: 60,
    fontStyle: "Roboto",
    fontWeight: "bold",
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

  box: {
    flexDirection: "row", // Đặt flex-direction là "row" để các phần tử con nằm trên cùng một dòng
    width: 295,
    height: 45,
    backgroundColor: "#FFFFFF",
    

  },
  text3: {
    fontSize: 18,
    fontStyle: "Roboto",
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width:50,
    height: 50,
    backgroundColor:"#E5F4F5",
    borderWidth: 1, // Đặt độ dày của viền
    borderColor: "#000000", // Đặt màu viền thành đen
  },
});
