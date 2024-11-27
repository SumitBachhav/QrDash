import { Alert, Modal, Pressable, TextInput, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useCardData } from './store';
import { useSelectedCard } from './store';


// function MyCheckbox({ onChange, checked }) {
//     return (
//       <Pressable
//         role="checkbox"
//         aria-checked={checked}
//         style={[styles.checkboxBase, checked && styles.checkboxChecked]}
//         onPress={onChange}>
//         {checked && <Ionicons name="checkmark" size={24} color="white" />}
//       </Pressable>
//     );
//   }


const SelectableCard = (props) => {

    const cardData = useCardData((state) => state.cardData);
    let t, v, id;
    for (let i = 0; i < cardData.length; i++) {
        if (cardData[i].id === props.id) {
            t = cardData[i].title;
            v = cardData[i].value;
            id = cardData[i].id
            break
        }
    }

    const updateData = useCardData((state) => state.updateData);
    const selectedCard = useSelectedCard((state) => state.selectedCard);
    const addSelectedCard = useSelectedCard((state) => state.addSelectedCard);
    const removeSelectedCard = useSelectedCard((state) => state.removeSelectedCard);

    let checked = selectedCard?.includes(id);



    // const [checked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    // const [title, setTitle] = useState('');
    // const [text, setText] = useState('');
    const [title, setTitle] = useState(t);
    const [text, setText] = useState(v);

    const save = () => {
        setModalVisible(!modalVisible)
        // useCardData.setState((state) => ({ cardData: state.cardData.map((item) => item.id === id ? { ...item, title, value: text } : item) }))
        updateData(id, title, text)
    }

    const checkboxHandler = () => {
        // useSelectedCard.setState((state) => ({ selectedCard: state.selectedCard.push(id) }))
        if (checked) {
            removeSelectedCard(id)
        } else {
            addSelectedCard(id)
        }
        checked = (selectedCard?.includes(id));
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                {/* <Pressable style={styles.textContainer} onPress={() => <TextEditor />}> */}
                <Pressable style={styles.textContainer} onPress={() => setModalVisible(true)}>
                    <Text style={styles.checkboxLabel}>{t}</Text>
                    <Text style={styles.checkboxLabe2}>{v}</Text>
                </Pressable>
                <Pressable
                    role="checkbox"
                    aria-checked={checked}
                    style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                    onPress={() => checkboxHandler()}>
                    {checked && <Ionicons name="checkmark" size={24} color="white" />}
                </Pressable>
            </View>

            <SafeAreaProvider style={styles.container}>
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
                                    <Text style={styles.buttonText}>X</Text>
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
                                    <Text style={styles.buttonText}>Save</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    {/* <Pressable
                    style={[styles.buttonOpen, styles.button]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable> */}
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

export default SelectableCard

const styles = StyleSheet.create({
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'coral',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: 'coral',
    },
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appTitle: {
        marginVertical: 16,
        fontWeight: 'bold',
        fontSize: 24,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 18,
    },
    checkboxLabe2: {
        marginLeft: 8,
        fontWeight: '300',
        fontSize: 18,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    card: {
        backgroundColor: '#A9A8AD',
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container: {
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
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
    buttonText: {
        color: 'black',
        // fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
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
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
    },
})