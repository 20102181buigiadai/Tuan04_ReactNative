import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Pressable
} from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
//npm install expo-radio-button

export default function Bai1e() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text1}>REGISTER</Text>
      </View>

      <View style={styles.inputForm}>
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="Phone" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <View style={styles.inputPassword}>
          <TextInput placeholder="Password" style={styles.txtPasword} />
          <Image
            source={require("../assets/eye.png")}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <TextInput style={styles.textInput} placeholder="Birthday" />
        <View style={styles.radioButtonView}>
          <RadioButtonGroup containerStyle={styles.radioButton}>
            <RadioButtonItem value="male" label="Male" />
            <RadioButtonItem value="female" label="Female" />
          </RadioButtonGroup>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.textButton}>REGISTER</Text>
        </Pressable>
        <Text style={styles.textEnd}>
          When you agree to terms and conditions
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#31AA5235"
  },

  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  text1: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 29,
    letterSpacing: 0
  },

  inputForm: {
    flex: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30
  },

  textInput: {
    width: 330,
    height: 54,
    border: "1px solid #F2F2F2",
    paddingHorizontal: 10,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0,
    backgroundColor: "#31AA5235"
  },

  inputPassword: {
    flexDirection: "row",
    backgroundColor: "#31AA5235",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10
  },
  txtPasword: {
    width: 280,
    height: 54,
    border: "1px solid #F2F2F2",
    paddingHorizontal: 10,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 21,
    letterSpacing: 0
  },

  button: {
    width: 330,
    height: 45,
    borderRadius: 1,
    borderBlockColor: "black",
    backgroundColor: "#E53935",
    justifyContent: "center",
    alignItems: "center"
  },

  textButton: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 23,
    letterSpacing: 0,
    color: "#FFFFFF"
  },

  textEnd: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: "center",
    height: 40
  },

  radioButton: {
    flexDirection: "row",
    marginRight: 50
  },

  radioButtonView: {
    width: 330,
    height: 54
  }
});
