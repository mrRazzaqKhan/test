import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { IconPath } from '../Assests'
import { SafeAreaView } from 'react-native-safe-area-context'

const Logout = () => {
    return (
        <ScrollView>
            <View style={styles.MainView}>

                <LinearGradient colors={["#FF0059", "#F4C21087"]} style={{ height: 300 }}>
                    <View style={styles.IconPathView}>
                        <Image style={styles.IconPath}
                            source={IconPath.Login} />
                    </View>
                </LinearGradient>

                <View style={styles.MainView2}>
                    <View style={styles.Caintner}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.TextFullname}> FullName</Text>
                            <Text style={styles.Edit}>Edit</Text>
                        </View>
                    </View>
                    <View style={styles.Caintner2}>
                        <Text style={styles.Myaccount}>MyAccount</Text>
                        <View style={styles.Caintner3}>
                            <Text style={styles.Offers}>Favourites, Offers & Settings</Text>
                            <Image source={IconPath.ArrorRight} />
                        </View>
                    </View>
                    <View style={styles.Caintner4}>
                        <Text style={styles.Address}>Address</Text>
                        <View style={styles.Share}>
                            <Text style={styles.TextShare}>Share, Edit & Add New Addresses</Text>
                            <Image source={IconPath.ArrorRight} />
                        </View>
                    </View>
                    <View style={styles.ViewCaintnair}>
                    <View>

                        <Text style={styles.Payment}>Payments & Refunds</Text>
                            <Text style={styles.TextShare}>Refund Status & Payment Modes</Text>
                            </View>
                            <Image source={IconPath.Arr} />

                        
                    </View>
                    <View style={styles.Caintner5}>
                        <View >
                            <Text style={styles.Help}>Help</Text>

                            <Text style={styles.Faq}>FAQ & Links</Text>
                        </View>
                        <Image source={IconPath.ArrorRight} />


                    </View>
                    <View style={styles.botton}>
                        <Text style={styles.LOg}>LOGOUT</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default Logout

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: "#fff"
    },
    IconPath: {
        resizeMode: "contain",
    },
    IconPathView: {
        // justifyContent:"center",
        alignItems: "center",
        marginVertical: 40
    },
    MainView2: {

        backgroundColor: "#FFF2F2",
        width: "90%",
        alignSelf: "center",
        bottom: 50
    },
    Caintner: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        elevation: 10
    },
    TextFullname: {
        color: "#000",
        fontSize: 16,
        fontWeight: "normal"
    },
    Edit: {
        color: "red",
        fontSize: 16,
        fontWeight: "normal"
    },
    Caintner2: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        // marginVertical:20,
        elevation: 10
    },
    Myaccount: {
        color: "#000",
        fontSize: 18,
        fontWeight: "normal"
    },
    Offers: {
        color: "#4A4747",
        // fontSize:10,
        // fontWeight:"normal"
    },
    Caintner3: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Caintner4: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        elevation: 10
    },
    Address: {
        color: "#000",
        fontSize: 18,
        fontWeight: "normal"
    },
    Share: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    TextShare: {
        color: "#4A4747",
    },
    Caintner5: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        elevation: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10
    },
    Help: {
        color: "#000",
        fontSize: 18,
        fontWeight: "normal"
    },


    Faq: {
        color: "#4A4747",

    },
    botton: {
        width: '100%',
        backgroundColor: '#fff',
        marginVertical: 30,
        padding: 10
    },
    LOg: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 10
    },
    ViewCaintnair:{
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10,
        backgroundColor:"#fff",
        elevation:10,
        borderRadius:10,
        padding:5,
        marginHorizontal:10,
        paddingHorizontal:10  
    },
    Payment:{
        color: "#000",
        fontSize: 18,
        fontWeight: "normal"
    }

})