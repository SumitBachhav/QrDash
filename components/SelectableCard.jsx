import { Alert, Modal, Pressable, TextInput, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';



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


const TextEditor = () => {
    return (
        <Text>TextEditor</Text>
    )
}

const SelectableCard = (props) => {
    const [checked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const save = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.card}>
                {/* <Pressable style={styles.textContainer} onPress={() => <TextEditor />}> */}
                <Pressable style={styles.textContainer} onPress={() => setModalVisible(true)}>
                    <Text style={styles.checkboxLabel}>{props.title}</Text>
                    <Text style={styles.checkboxLabe2}>{props.value}</Text>
                </Pressable>
                <Pressable
                    role="checkbox"
                    aria-checked={checked}
                    style={[styles.checkboxBase, checked && styles.checkboxChecked]}
                    onPress={() => setChecked(!checked)}>
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
    },
})