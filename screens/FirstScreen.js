// Import các thành phần cần sử dụng từ thư viện
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-web'

// Component chính của ứng dụng
export default function App () {
  return (
    <View style={styles.container}>
      {/* Hiển thị hình ảnh logo */}
      <Image style={styles.logo} source={require('../assets/Ellipse8.png')} />

      {/* Hiển thị tiêu đề */}
      <Text style={styles.text1}>GROW {'\n'} YOUR BUSINESS</Text>
      {/* Hiển thị mô tả */}
      <Text style={styles.text2}>
        We will help you to grow your business using {'\n'} online server
      </Text>
      {/* Hiển thị nút đăng nhập và đăng ký */}
      <View style={styles.btngroup}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text3}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text3}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// Định nghĩa các kiểu dáng và style sử dụng trong ứng dụng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: 140,
    height: 140
  },
  text1: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  text2: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btngroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%' // Chiều rộng tối đa
  },
  btn: {
    width: 119,
    height: 48,
    backgroundColor: '#E3C000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text3: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  }
})
