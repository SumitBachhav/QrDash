import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function Scanner() {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const router = useRouter();

  let throttleTimer;
  let isExecuted = false;

  const fakeData = {
    Name: 'Alice Smith',
    Age: '28',
    Occupation: 'Graphic Designer',
    Location: 'New York, USA',
    Email: 'alice.smith@email.com',
    Phone: '+1 (555) 123-4567',
    Company: 'DesignWorks Studio',
    Hobbies: 'Painting, Cycling, Photography',
    Bio: 'Creative designer with a passion for art and technology.',
    SocialMedia: 'https://twitter.com/alicesmith',
    FavoriteColor: 'Turquoise',
    Pet: 'Golden Retriever named Max',
  };

  // function showData(data) {
  //   if (!isExecuted) {
  //     isExecuted = true;
  //     console.log("from scanner",JSON.stringify(data.fakeData))
  //     router.push(`/show_data?data=${JSON.stringify(data.fakeData)}`)
  //   }
  //   if (!throttleTimer) {
  //     throttleTimer = setTimeout(() => {
  //       isExecuted = false;
  //       console.log("Function executed after throttleeeeeee!");
  //       throttleTimer = null;
  //     }, 1000);
  //   }
  // }

 
  function showData(data) {
    if (!isExecuted) {
      isExecuted = true;
      console.log("from scanner camera",JSON.stringify(data))
      router.push(`/show_data?data=${JSON.stringify(data)}`)
    }
    if (!throttleTimer) {
      throttleTimer = setTimeout(() => {
        isExecuted = false;
        console.log("Function executed after throttleeeeeee!");
        throttleTimer = null;
      }, 1000);
    }
  }


  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
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
      }} onBarcodeScanned={({ data }) => showData(data)}>
      {/* }} onBarcodeScanned={({ data }) => console.log(data)}> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <Button onPress={() => showData({ fakeData })} title="show data" />
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
