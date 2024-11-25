import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const ModalView = () => {
    // const [modalVisible, setModalVisible] = useState(props.modalViewState);
    const [modalVisible, setModalVisible] = useState(true);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const save = () => {
        setModalVisible(!modalVisible)
    }
    return (
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
    );
};

const styles = StyleSheet.create({
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
});

export default ModalView;