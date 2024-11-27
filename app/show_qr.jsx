import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import QRCode from "react-qr-code";
import { useLocalSearchParams } from 'expo-router/build/hooks';


const svg = () => {
  // const obj = {
  //     "name": "John Doe",
  //     "age": 30,
  //     "city": "New York"
  // };
  const data = useLocalSearchParams();
  // const obj = JSON.parse(data.data);
  const obj = data.data;
  return (
    <View style={styles.container}>
      <QRCode value={obj} />
    </View>
  )
}

export default svg

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f9f9',
  }
})