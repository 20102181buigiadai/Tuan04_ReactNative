import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Thay đổi từ '@react-navigation/native-stack'

import MainScreen from './screens/MainCreen'; // Đảm bảo tên file và đường dẫn đúng
import FirstScreen from './screens/FirstScreen'; // Đảm bảo tên file và đường dẫn đúng
import Screen1_a from './screens/1_a'; // Đảm bảo tên file và đường dẫn đúng
import Screen1_b from './screens/1_b'; // Đảm bảo tên file và đường dẫn đúng
import Screen1_c from './screens/1_c'; // Đảm bảo tên file và đường dẫn đúng
// Import các màn hình khác tương tự

const Stack = createNativeStackNavigator() ; // Thay đổi từ '@react-navigation/native-stack'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen } />
        <Stack.Screen name="Screen1_a" component={Screen1_a} />
        <Stack.Screen name="Screen1_b" component={Screen1_b} />
        <Stack.Screen name="Screen1_c" component={Screen1_c} />
        {/* Thêm các màn hình khác tương tự */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
