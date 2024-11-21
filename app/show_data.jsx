import { useLocalSearchParams } from 'expo-router/build/hooks';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import DataBox from '../components/DataBox';
import { setStringAsync } from 'expo-clipboard';


const DisplayData = () => {
  const obj = useLocalSearchParams();
  const data = JSON.parse(obj.data);
  console.log("from show data",data)
  // const d2 = data
  const d2 = JSON.parse(data)
  console.log(typeof(d2))
  console.log("from d2",d2)
  

  return (
    <ScrollView>
      <Pressable
        style={styles.button}
        onPress={() => {
          setStringAsync(JSON.stringify(d2))
        }}>
        <Text style={styles.text}>{"Copy all to clipboard"}</Text>
      </Pressable>
      <View style={styles.container}>
        {data
          ?
          Object.entries(d2).map(([key, value]) => {
            return <DataBox key={key} data={{ key, value }} />;
          })
          :
          'No data available'}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 100
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#929aab',
    margin: 10,
    marginBottom: 0
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

export default DisplayData;
