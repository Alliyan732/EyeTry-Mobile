import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VisionAcuityInfo = () => {
  const navigation = useNavigation();


  const handleStartTest = () => {
    navigation.navigate('ColorBlindTest')
  }

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View style={styles.bannerText}>
          <Text style={styles.bannerInsideHeader}>Color Blind Test</Text>
          <Text style={styles.bannerInsideText}>A color blind test checks 
          for color vision deficiencies using patterns with hidden numbers.</Text>
        </View>
        <View style={styles.bannerImg}>
          <Image
            source={require('../../assets/images/visionAssessments/colorblind.png')}
            style={{ height: "100%", width: "100%", resizeMode: 'contain' }}
          />
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={styles.infoText1}>This quick test will assess your vision and help you understand its current state. 
          Please follow the instructions carefully and answer the questions honestly for accurate
           results.</Text>
           <Text style={[styles.infoText1, { marginTop: 10 }]}>Color Blindness Test: Assess your ability to distinguish
            colors in various patterns and shapes on the screen. Adjust your device's brightness for the best visibility.</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleStartTest}
      >
        <Text style={styles.buttonText}>Start Test</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section1: {
    height: "25%",
    width: "90%",
    backgroundColor: "#0F97B1",
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20

  },
  section2: {
    height: "50%",
    width: "90%",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    padding: 30
  },
  bannerText: {
    width: "60%",
    height: "70%",
    padding: 10,
    paddingLeft: 15
  },
  bannerImg: {
    width: "40%",
    height: "70%",
  },
  bannerInsideText: {
    textAlign: 'justify',
    fontSize: 12,
    color: "white",
    fontWeight: '600'
  },
  bannerInsideHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white",
    marginBottom:5
  },
  testSection1: {
    flexDirection: 'row',
    height: "50%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center'

  },
  infoText1: {
    fontSize: 16,
    textAlign: 'justify',
    color: "grey"
  },
  button: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#0F97B1',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    // Apply a linear gradient as the background
    background: 'linear-gradient(to right, #ff6b6b, #ffc4c4)',
  },
  buttonText: {
    color: '#0F97B1',
    fontSize: 18,
    fontWeight: 'bold',
  },


});

export default VisionAcuityInfo;
