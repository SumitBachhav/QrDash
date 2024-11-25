import { TextInput, Alert, Modal, StyleSheet, Platform, View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import SelectableCard from '../../components/SelectableCard';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';




export default function HomeScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const save = () => {
    setModalVisible(!modalVisible)
  }


  const openModal = () => {
    setModalVisible(true);
  }

  const cardData = [
    {
      id: 1,
      title: 'Card 1',
      value: 'Value 1',
    },
    {
      id: 2,
      title: 'Card 2',
      value: 'Value 2',
    },
    {
      id: 3,
      title: 'Card 3',
      value: 'Value 3',
    },
    {
      id: 4,
      title: 'Card 4',
      value: 'Value 4',
    },
    {
      id: 5,
      title: 'Card 5',
      value: 'Value 5',
    },
    {
      id: 6,
      title: 'Card 6',
      value: 'Value 6',
    },
    {
      id: 7,
      title: 'Card 7',
      value: 'Value 7',
    },
    {
      id: 8,
      title: 'Card 8',
      value: 'Value 8',
    },
    {
      id: 9,
      title: 'Card 9',
      value: 'Value 9',
    },
    {
      id: 10,
      title: 'Card 10',
      value: 'Value 10',
    },
  ]

  let lastCardId = 1;

  const addData = () => {
    // setCardData((prevData) => [...prevData, { id: prevData.length + 1, title: `Card ${prevData.length + 1}`, value: `Value ${prevData.length + 1}` }]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {cardData.map((card) => (
          <SelectableCard key={card.id} title={card.title} value={card.value} />
        ))}
      </ScrollView>

      <SafeAreaProvider style={styles.mContainer}>
        <SafeAreaView style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                  style={[styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.buttonX}>X</Text>
                </Pressable>
                <TextInput
                  style={styles.titleInput}
                  placeholder="Title..."
                  onChangeText={(text) => setTitle(text)}
                  value={title}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder="Type here..."
                  onChangeText={(text) => setText(text)}
                  value={text}
                  multiline
                />
                <Pressable
                  style={[styles.buttonSave]}
                  onPress={() => save()}>
                  <Text style={styles.buttonX}>Save</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </SafeAreaProvider>

      <Pressable style={styles.add}
        onPress={() => openModal()}
      >
        <Text style={styles.addText}> + </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 30
  },
  add: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    backgroundColor: '#58d68d',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  addText: {
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold'
  },
  mContainer: {
    position: 'absolute',
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '50%',
    width: '80%',
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    // backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 10,
    // elevation: 2,
    position: 'absolute',
    top: 0,
    right: 1,
  },
  buttonSave: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
    position: 'absolute',
    bottom: 10,
  },
  buttonX: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: 'center',
  // },
  titleInput: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    height: '80%',
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },

});
