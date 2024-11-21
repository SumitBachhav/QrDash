import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { setStringAsync } from 'expo-clipboard';


const DataBox = (props) => {
  return (
        <Pressable style={styles.card} onPress={() => {
            // setStringAsync(`${props.data.key}:${props.data.value}`)
            setStringAsync(props.data.value)
          }}>
            <Text style={styles.keyText}>{props.data.key}</Text>
            <Text style={styles.valueText}>{props.data.value}</Text>
        </Pressable>
  )
}

export default DataBox

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
        flex: 1,
        alignContent: 'space-between',
        minWidth: '98%',
      },
      keyText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
      },
      valueText: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
      },
})