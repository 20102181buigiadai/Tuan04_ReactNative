import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Thay đổi từ '@react-navigation/native-stack'

import MainScreen from "./screens/MainCreen"; // Đảm bảo tên file và đường dẫn đúng
import FirstScreen from "./screens/FirstScreen";
import Screen1_a from "./screens/1_a";
import Screen1_b from "./screens/1_b";
import Screen1_c from "./screens/1_c";
import Screen1_d from "./screens/1_d";
import Screen1_e from "./screens/1_e";
import Screen2_a from "./screens/2_a";
import XMEye from "./screens/XMEye";

// Import các màn hình khác tương tự

const Stack = createNativeStackNavigator(); // Thay đổi từ '@react-navigation/native-stack'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Screen1_a" component={Screen1_a} />
        <Stack.Screen name="Screen1_b" component={Screen1_b} />
        <Stack.Screen name="Screen1_c" component={Screen1_c} />
        <Stack.Screen name="Screen1_d" component={Screen1_d} />
        <Stack.Screen name="Screen1_e" component={Screen1_e} />
        <Stack.Screen name="Screen2_a" component={Screen2_a} />
        <Stack.Screen name="XMEye" component={XMEye} />
        {/* Thêm các màn hình khác tương tự */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
