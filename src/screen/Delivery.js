import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImagePath } from '../Assests'
import Swiper from 'react-native-swiper'
import { IconPath } from '../Assests'
import { useState } from 'react'
const Delivery = () => {
    const [Chilke, setChilke] = useState(false)
    const [Chilkes, setChilkes] = useState(false)

    return (
        <ScrollView>
            <View style={styles.MainView}>
                <View style={{ height: 340 }}>

                    <Swiper autoplay={true} showsButtons={false} autoplayTimeout={3}>
                        <Image source={ImagePath.AddressDelivery} style={{ alignSelf: "center" }} />
                        <Image source={ImagePath.AddressDelivery} style={{ alignSelf: "center" }} />
                        <Image source={ImagePath.AddressDelivery} style={{ alignSelf: "center" }} />
                    </Swiper>
                </View>

                <Text style={styles.Delivery}>Delivery</Text>
                <View style={styles.ViewAddressdetails}>
                    <Text style={styles.Address}>Address details</Text>
                    <Text style={styles.Changes}>Changes</Text>
                </View>
                <View style={styles.MainWidth}>
                    <View style={styles.boderwidth}>
                        <Text style={styles.text}>Hena Montena</Text>
                    </View>
                    <View style={styles.boderwidth}>

                        <Text style={styles.text}>Km 5 refinery  road oppsite {"\n"}public road, effurun jaipur state</Text>
                    </View>
                    <View style={styles.number}>
                        <Text style={styles.text}>+8432499696</Text>
                    </View>
                </View>
                <View style={styles.Deliverymethod1}>
                    <Text style={styles.Deliverymethod}>Delivery method.</Text>
                </View>

                <View style={styles.MainWidth2}>
                    <View style={{ flexDirection: "row", paddingLeft: 10, alignItems: "center" }}>

                        <TouchableOpacity onPress={() => { setChilkes(false), setChilke(true) }}>
                            <Image source={(Chilke == false) ? IconPath.Switch : IconPath.Switch2} style={{ resizeMode: "contain",width:20,height:16 }} />

                        </TouchableOpacity>



                        <Text style={styles.Doordelivery}>Door delivery</Text>
                    </View>
                    <View style={{ borderBottomWidth: 1, width: "70%", borderColor: "#A1A1A1", marginVertical: 20 }}></View>
                    <View style={{ flexDirection: "row", paddingLeft: 10, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => { setChilke(false), setChilkes(true) }}>
                        <Image source={(Chilkes == false) ? IconPath.Switch : IconPath.Switch2} style={{ resizeMode: 'contain',width:20,height:16 }} />

                    </TouchableOpacity>
                    <Text style={styles.Pickup}>Pick up</Text>
                </View>
                </View>
                <View style={styles.Deliverymethod1}>
                    <Text style={styles.Deliverymethod}>Delivery method.</Text>
                </View>
<View style={styles.MainWidth2}>
    <View style={styles.ViewMainAtm}>
    <Image source={ImagePath.Atm}/>
    <Text style={styles.Card}>Card </Text>
    </View>
    <View style={{ borderBottomWidth: 1, width: "70%", borderColor: "#A1A1A1", marginVertical: 20,marginHorizontal:20 }}></View>
<View style={styles.ViewMainAtm}>
    <Image source={ImagePath.Bank}/>
    <Text style={styles.Bankaccount}>Bank account</Text>
</View>
</View>
<View style={styles.ViewTotal}>
    <Text style={styles.TotalText}>Total</Text>
    <Text style={styles.NumberOf}>₹250</Text>
</View>
<TouchableOpacity style={styles.Button}>
<Text style={styles.Button2}>PROCEED TO PAYMENT</Text>
</TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Delivery

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },
    Delivery: {
        color: "#000",
        fontSize: 25,
        fontWeight: "bold"
    },
    ViewAddressdetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
    Address: {
        fontSize: 22,
        fontWeight: "normal",
        color: "#000"
    },
    Changes: {
        color: "#FF001F",
        fontSize: 18,
        fontWeight: "normal"
    },
    MainWidth: {
        padding: 10,
        backgroundColor: "#C4C4C424",
        borderRadius: 15
    },
    boderwidth: {
        borderBottomWidth: 1,
        borderColor: "#A1A1A1",
        width: "60%",
        paddingVertical: 10
    },
    text: {
        fontWeight: '400',
        color: '#4A4747',
    },
    number: {
        marginVertical: 10
    },
    Deliverymethod: {
        color: "#000",
        fontSize: 20,
        fontWeight: "700"
    },
    Deliverymethod1: {
        marginVertical: 20
    },
    MainWidth2: {
        padding: 10,
        backgroundColor: "#C4C4C424",
        borderRadius: 15
    },
    Doordelivery: {
        color: "#000",
        fontSize: 18,
        fontWeight: "normal",
        paddingLeft: 10
    },
    Pickup:{
        color:"#000",
        fontSize:18,
        fontWeight:"normal",
        paddingLeft:12

    },
    Card:{
        textAlign:"center",
        color:"#000",
        fontSize:18,
        fontWeight:"normal",
        flex:1
        
    },
    ViewMainAtm:{
        flexDirection:"row"
        ,alignItems:"center",
        width:"70%",
        paddingHorizontal:10

    },
Bankaccount:{
   textAlign:"center",
        color:"#000",
        fontSize:18,
        fontWeight:"normal",
        flex:1
},
TotalText:{
    color:"#000",
    fontWeight:"bold",
    fontSize:22
},

ViewTotal:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:20
},
NumberOf:{
    color:"#000",
    fontWeight:"bold",
    fontSize:22
},
Button:{
    backgroundColor:"#FF0059",
    borderRadius:10,
    padding:20,
    marginHorizontal:10,
    alignItems:'center',
    marginVertical:20
},
Button2:{
    color:"#fff",
    fontSize:20,
    fontWeight:"700",
}

})
