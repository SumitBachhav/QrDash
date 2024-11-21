import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter} from 'expo-router';
import DisplayData from '../show_data';

export default function Scanner() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  let throttleTimer;
  let isExecuted = false;

function showData(data) {
  if (!isExecuted) {
    isExecuted = true; // Mark as executed
    console.log(data);
    // router.push({
    //   pathname: '/show_data',
    //   // params: {
    //   //   data: data
    //   // }
    //   params: {
    //     name: "John Doe",
    //     age: "30", // Query parameters are strings
    //   },
    // })
    router.push(`/show_data?data=${data}`)
}
  if (!throttleTimer) {
    throttleTimer = setTimeout(() => {
      isExecuted = false;
      console.log("Function executed after throttleeeeeee!");
      throttleTimer = null;
    }, 1000); // Execute every 1000ms (1 second)
  }
}


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} barcodeScannerSettings={{
    barcodeTypes: ["qr"],
//   }} onBarcodeScanned={({ data }) => console.log(data)}>
  // }} onBarcodeScanned={({ data }) => router.push('/(tabs)/show_qr' + '?data=' + data)}>
  }} onBarcodeScanned={({ data }) => showData(data)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View> 
      </CameraView>
      <Button onPress={() => showData("hell000o")} title="show data" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
