import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import QRCode from "react-qr-code";

const svg = () => {
    const obj = {
        "name": "John Doe",
        "age": 30,
        "city": "New York"
    };

  return (
    <View style = {styles.container}>
      <QRCode value={JSON.stringify(obj)} />
    </View>
  )
}

export default svg

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    }
})