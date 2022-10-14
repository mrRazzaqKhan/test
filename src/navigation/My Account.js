import React from 'react';
import { View, Text, StyleSheet, TextInput, Image ,ScrollView, TouchableOpacity} from 'react-native';
import { IconPath } from '../Assests';
import { ImagePath } from '../Assests';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

const MyAccount = ({navigation}) => {
    return (
        <ScrollView>
        <View style={styles.MainView}>
            <View style={styles.MainViewText}>
                <Text style={styles.HENAMONTENA}>HENA MONTENA</Text>
                <Text style={styles.EditText}>Edit</Text>
            </View>
            <TextInput style={styles.TextInputNumber}
                placeholder='' />
                <Collapse>
                <CollapseHeader>
            <View style={styles.ViewIcon}>
                <Text style={styles.TextAccount}>My Account</Text>
                <Image source={IconPath.ArrorUp} />
            </View>
            </CollapseHeader>
            <CollapseBody>
            <Text style={styles.SettingText}>favourites, Offers & Settings</Text>
            <View style={styles.Doteline}></View>
            <View style={styles.MainView3}>
                <View style={styles.MainCantnair}>
                    <Image style={styles.IconHeatt}
                        source={IconPath.Heart} />
                    <Text style={styles.Favourites}>Favourites</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("Favourites")}>

                <Image source={IconPath.ArrorRight} />
                </TouchableOpacity> 

            </View>
            <View style={styles.MainView4}>
                <View style={styles.MainCantnair2}>
                    <Image style={styles.IconDisc}
                        source={IconPath.Discount} />
                    <Text style={styles.Offers}>Offers</Text>
                </View>

                <Image source={IconPath.ArrorRight} />
            </View>
            <View style={styles.SettinViewMain}>
                <View style={styles.SettingCantnair}>
                    <Image source={IconPath.Setting} />
                    <Text style={styles.Setting}>Setting</Text>
                </View>
                <Image source={IconPath.ArrorRight} />
            </View>
            </CollapseBody>
            </Collapse>
            <View style={{ borderBottomWidth: 1, marginVertical: 20 }}></View>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>Addresses</Text>
            <View style={styles.AddressView}>
                <Text style={styles.Address}>share, Edit, & New Addresses</Text>
                <Image source={IconPath.ArrorRight} />
            </View>
            <View style={{ backgroundColor: "#F4D5BD63", height: 80, borderRadius: 15, marginVertical: 20 }}>
                <View style={styles.ImageView}>
                    <Image source={ImagePath.gift} />
                    <Text style={styles.TextImage}>Did you know?</Text>
                </View>
                <View style={{ justifyContent: "center", top: -20 }}>
                    <Text style={styles.TextImage2}>you can now share addresses with  </Text>
                    <Text style={styles.TextImage3}>friends and famliy using a smart link!</Text>
                </View>
                <View style={{ borderBottomWidth: 1, marginVertical: 10 }}></View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <View style={styles.PaymentsView}>
                    <Text style={styles.Payments}>Payments & Refunds</Text>
                    <Image source={IconPath.ArrorUp} />
                </View>
                <Text style={styles.Refund}>Refund Status & Payment Modes </Text>
            </View>
            <View style={{ borderBottomWidth: 1, borderStyle: 'dashed', marginVertical:20 }}></View>

            <Text style={styles.Help}>Help</Text>
            <View style={styles.HelpView}>
                <Text style={styles.FAQ}>FAQs & Links</Text>
                <Image source={IconPath.ArrorRight} />
            </View>
        </View>
        </ScrollView>
    );
};

export default MyAccount;
const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        marginHorizontal: 20
    },
    MainViewText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20

    },
    HENAMONTENA: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black"
    },
    EditText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF0059"
    },
    TextInputNumber: {
        borderBottomWidth: 1,
    },
    ViewIcon: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
    TextAccount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000"
    },
    SettingText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "400"
    },
    Doteline: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        marginVertical: 20
    },
    IconHeatt: {
        tintColor: "black",
        margin: 5
    },
    Favourites: {
        fontSize: 18,
        fontWeight: "400",
        color: "black",
        left: 15

    },
    MainView3: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    MainCantnair: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    IconDisc: {
        resizeMode: "contain",
        height: 18,
        width: 18,
        margin: 5
    },
    Offers: {
        fontSize: 18,
        fontWeight: "400",
        color: "black",
        left: 22
    },
    MainView4: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20
    },
    MainCantnair2: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    Setting: {
        fontSize: 18,
        fontWeight: "400",
        color: "black",
        left: 22
    },
    SettinViewMain: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    SettingCantnair: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    Address: {
        fontSize: 16,
        fontWeight: "700"
    },
    AddressView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    TextImage: {
        fontSize: 16,
        fontWeight: "500",
        color: "black",
        left: 10
    },
    ImageView: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10
    },
    TextImage2: {
        fontSize: 12,
        fontWeight: "500",
        color: "black",
        textAlign: "center",

    },
    TextImage3: {
        fontSize: 12,
        fontWeight: "500",
        color: "black",
        textAlign: "center",
    },
    Payments: {
        fontSize: 16,
        fontWeight: "normal",
        color: "#000"
    },
    PaymentsView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    Refund: {
        fontSize: 14,
        fontWeight: "400",
        color: "#000"

    },
    Help:{
        fontSize:15,
        fontWeight:"700",
        color:"#000"
    },
    FAQ:{
        fontSize:14,
        fontWeight:"600",
        color:"#000"
    },
    HelpView:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
});