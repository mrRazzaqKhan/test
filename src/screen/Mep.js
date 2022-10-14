import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text, Image, Dimensions,
    SafeAreaView,
    TouchableOpacity,
    
    
} from 'react-native';
// import GlobalStyle from '../utils/GlobalStyle';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';// import Imagepath from '../common/imagepath';÷
// import MapViewDirections from 'react-native-maps-directions';
import { Button } from 'react-native-paper';

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
 const Mep=({navigation})=> {
    const mapRef = useRef()
    const [state, setstate] = useState({
        pickupCoeds: {
            latitude: 26.943041,
            longitude: 75.757057,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        droplocationCors: {
            latitude: 28.7041,
            longitude: 77.1025,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })
    const { pickupCoeds, droplocationCors } = state
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCn8hEUj7EOpIFOfsysqdYBz2-PMsz_V9Q';
    return (
        <View style={styles.body}>
            <View style={{ backgroundColor: "black", justifyContent: "center",  width: "100%",flex:1.5 }}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                    {/* <Image source={Imagepath.splec} style={{ width: 50, }} resizeMode={"contain"} /> */}
                    <Text style={{ color: "white", fontSize: 30, textAlign: "center", flex: 0.7 }}>Start on The Kingsway </Text>
                </View>
            </View>
            
            
            {/* <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={pickupCoeds}
            > */}
   <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{height:"100%",width:"100%"}}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>

            {/* </MapView> */}
          {/* <TouchableOpacity 
          style={{backgroundColor:"#1F95A0",flex:1,justifyContent:"center"}}>
            <Text style={{fontSize:22,color:"white",fontWeight:"700",textAlign:"center"}}>Arrived At Location</Text>
          </TouchableOpacity> */}

        </View>
    );
}
export default Mep;
const styles = StyleSheet.create({
    body: {
        flex: 1,
        // alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    map: {
        width: '100%',
        // height: '75%',
        position:'relative',
        flex:1
        
    },
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
     
});