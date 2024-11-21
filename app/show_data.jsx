// DisplayData.js
import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DisplayData = () => {
    const {data}  = useLocalSearchParams();
    console.log(`props.data: ${data}`);
    // console.log(`props.data2: ${data2}`);

  return (
    <View style={styles.container}>
      {/* Check if data is provided, else show a default message */}
      <Text style={styles.text}>{data ? data : 'No data available'}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default DisplayData;
