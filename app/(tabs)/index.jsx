import { TextInput, Alert, Modal, StyleSheet, Platform, View, Text, Pressable, ScrollView, Button, Linking } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import SelectableCard from '../../components/SelectableCard';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCount } from '../../components/store';
import { useCardData } from '../../components/store';
import { useSelectedCard } from '../../components/store';




export default function HomeScreen() {

  const router = useRouter();


  const count = useCount((state) => state.count);
  const increment = useCount((state) => state.increment);
  const decrement = useCount((state) => state.decrement);

  const cardData = useCardData((state) => state.cardData);
  const addCentralData = useCardData((state) => state.addData);

  const selectedCard = useSelectedCard((state) => state.selectedCard);
  const resetSelectedCard = useSelectedCard((state) => state.resetSelectedCard);

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const save = () => {
    if (title === '' || text === '') {
      // setModalVisible(!modalVisible)
      alert('Please enter title and text')
      return
    } else {
      setModalVisible(!modalVisible)
      addCentralData(title, text)
      setTitle('')
      setText('')
    }

  }

  const removeSelectedCard = useSelectedCard((state) => state.removeSelectedCard);

  const openModal = () => {
    setModalVisible(true);
    // removeSelectedCard(5)
  }

  // const cardData = [
  //   {
  //     id: 1,
  //     title: 'Card 1',
  //     value: 'Value 1',
  //   },
  //   {
  //     id: 2,
  //     title: 'Card 2',
  //     value: 'Value 2',
  //   },
  //   {
  //     id: 3,
  //     title: 'Card 3',
  //     value: 'Value 3',
  //   },
  //   {
  //     id: 4,
  //     title: 'Card 4',
  //     value: 'Value 4',
  //   },
  //   {
  //     id: 5,
  //     title: 'Card 5',
  //     value: 'Value 5',
  //   },
  //   {
  //     id: 6,
  //     title: 'Card 6',
  //     value: 'Value 6',
  //   },
  //   {
  //     id: 7,
  //     title: 'Card 7',
  //     value: 'Value 7',
  //   },
  //   {
  //     id: 8,
  //     title: 'Card 8',
  //     value: 'Value 8',
  //   },
  //   {
  //     id: 9,
  //     title: 'Card 9',
  //     value: 'Value 9',
  //   },
  //   {
  //     id: 10,
  //     title: 'Card 10',
  //     value: 'Value 10',
  //   },
  // ]


  const selectedId = selectedCard
  selectedId.sort()
  let shareObject = {}
  const share = () => {
    if (selectedCard.length > 0) {
      cardData.map((item) => { return selectedId.includes(item.id) ? shareObject[item.title] = item.value : item })
      console.log(shareObject)
      // router.push(`/show_qr`)
      router.push(`/show_qr?data=${JSON.stringify(shareObject)}`)
    }
    resetSelectedCard()
  }





  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      {/* <View style={styles.container}> */}
      <SafeAreaView style={styles.container}>

        {/* <Text>Selected Card: {selectedCard}</Text> */}

        <ScrollView>
          {cardData.map((card) => (
            <SelectableCard key={card.id} title={card.title} value={card.value} id={card.id} />
          ))}
        </ScrollView>

        {/* <Text>{count}</Text> */}

        {/* <Button
      title='increment'
      onPress={increment}
      />
      <Button
      title='decrement'
      onPress={decrement}
      /> */}

        {/* <SafeAreaProvider style={styles.mContainer}>
        <SafeAreaView style={styles.centeredView}> */}
        <View style={styles.mContainer}>
          <View style={styles.centeredView}>
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
          </View>
        </View>
        {/* </SafeAreaView>
      </SafeAreaProvider> */}

        <Pressable style={styles.add}
          onPress={() => openModal()}
        >
          <Text style={styles.addText}> + </Text>
        </Pressable>

        <Pressable style={styles.share}
          onPress={() => share()}
        >
          <Text style={styles.addText}> S </Text>
        </Pressable>
        {/* </View> */}
      </SafeAreaView>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 30,
    // backgroundColor: '#f7f9f9',
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
  share: {
    position: 'absolute',
    bottom: 10,
    left: 10,
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
    padding: 10,
    paddingTop: 35,
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
    width: '95%',
    // borderColor: 'gray',
    // borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 10,
    backgroundColor: '#f7f9f9',
  },
  textInput: {
    height: '80%',
    width: '95%',
    // borderColor: 'gray',
    // borderWidth: 1,
    padding: 10,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    backgroundColor: '#f7f9f9',
  },

});
