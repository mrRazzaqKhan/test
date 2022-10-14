import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImagePath } from '../Assests';
const Welcome = ({navigation}) => {
  return (
    <>
      <LinearGradient colors={["#FF0059", "#F4C21087"]} style={{ flex: 1 }}>
        <Image source={ImagePath.deleveryBoy} />
      </LinearGradient>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, textAlign: "center", color: "#000", marginVertical: 20, fontWeight: "bold" }}> Order from a wide range {"\n"}of restaurants </Text>
        <View style={styles.ViewResturant}>
          <Text style={styles.Resturant}>Ready from a wide range of resturants</Text>
        </View>
        <View style={styles.GETSTARTEDView}>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
          <Text style={styles.GETSTARTED}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>

  );
};

export default Welcome;
const styles = StyleSheet.create({
  Resturant: {
    color: "#6B6762",
    fontSize: 15,
    textAlign: "center"
  },
  ViewResturant: {
    marginVertical: 20
  },
  GETSTARTEDView: {
    marginTop: 60,
    padding: 15,
    backgroundColor: "#FF0059",
    borderRadius: 15,
    width: "70%",
    alignSelf: "center"
  },
  GETSTARTED: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }

})  