import React from "react";
import { View, Button } from "react-native";

export default function MainScreen({ navigation }) {
  return (
    <View>
      <Button
        title="FirstScreen"
        onPress={() => navigation.navigate("FirstScreen")}
      />
      <Button title="1_a" onPress={() => navigation.navigate("Screen1_a")} />
      <Button title="1_b" onPress={() => navigation.navigate("Screen1_b")} />
      <Button title="1_c" onPress={() => navigation.navigate("Screen1_c")} />
      <Button title="1_d" onPress={() => navigation.navigate("Screen1_d")} />
      <Button title="1_e" onPress={() => navigation.navigate("Screen1_e")} />
      <Button title="2_a" onPress={() => navigation.navigate("Screen2_a")} />
      <Button title="XMEye" onPress={() => navigation.navigate("XMEye")} />
    </View>
  );
}
