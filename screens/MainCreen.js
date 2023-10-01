import React from 'react';
import { View, Button } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View>
      <Button title="FirstScreen" onPress={() => navigation.navigate('FirstScreen')} />
      <Button title="1_a" onPress={() => navigation.navigate('Screen2')} />
      <Button title="1_b" onPress={() => navigation.navigate('')} />
      <Button title="1_c" onPress={() => navigation.navigate('')} />
      <Button title="1_d" onPress={() => navigation.navigate('')} />
      <Button title="1_e" onPress={() => navigation.navigate('')} />
      <Button title="2_a" onPress={() => navigation.navigate('')} />
      <Button title="XMEye" onPress={() => navigation.navigate('')} />
    </View>
  );
}
