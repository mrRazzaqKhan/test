import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconPath } from '../Assests'
import { ImagePath } from '../Assests'
import { useState } from 'react'

const Instamart = ({navigation}) => {
    const [count, setcount] = useState(0)
    const [count1, setcount1] = useState(0)
    const Data = [
        {
            id: 1,
            images: ImagePath.Mooms,
            name: 'Moms',
            name1: '₹ 65',
            name2: 'With spicy sause'
        },
        {
            id: 2,
            images: ImagePath.Past,
            name: 'Pasta',
            name1: '₹ 90',
            name2: 'With spicy sause'
        },
        {
            id: 3,
            images: ImagePath.Nood,
            name: 'Noodles',
            name1: '₹ 190',
            name2: 'With spicy sause'
        },
    ]
    const item = ({ item }) => {
        return (
            <View style={styles.FlatList}>
                <View style={{ flexDirection: "row" }}>

                    <Image source={item.images} />
                    <View style={{ textAlign: "center", marginLeft: 15 }}>

                        <Text style={styles.Mooms}>{item.name}</Text>
                        <Text style={styles.Rupees}>{item.name1}</Text>

                        <Text style={styles.MoomsSouse}>{item.name2}</Text>
                        <View style={styles.FlatListWidth}>

                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <TouchableOpacity onPress={() => setcount(count + 1)}><Text style={styles.TextNumberPluse}>+</Text></TouchableOpacity>
                                <Text style={styles.TextNumberCount}>{count}</Text>
                                <TouchableOpacity onPress={() => setcount(count - 1)}><Text style={styles.TextSub}>-</Text></TouchableOpacity>
                            </View>
                       
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <TouchableOpacity onPress={() => setcount1(count1 + 1)}><Text style={styles.TextNumberPluse2}>+</Text></TouchableOpacity>
                                <Text style={styles.TextNumberCount2}>{count1}</Text>
                                <TouchableOpacity onPress={() => setcount1(count1 - 1)}><Text style={styles.TextSub2}>-</Text></TouchableOpacity>
                            </View>
                    </View>

                </View>

            </View>
        )
    }


    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.MainView}>
                    <View style={{marginHorizontal:10}}>
                    <TouchableOpacity onPress={()=>navigation.goBack("Order")} style={styles.IconPathHiht}>
                        <Image style={styles.IconPathArror}
                            source={IconPath.Arror} />
                    </TouchableOpacity> 
                    <Text style={styles.MyCart}>My Cart</Text>
                    <View>
                        <FlatList
                            data={Data}
                            renderItem={item}

                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    </View>
                    <View style={styles.MainView2}>
                        <View style={styles.MainWidth}></View>
                        <View style={styles.ViewItemNumber}>
                        <Text style={styles.TextNumerItem}>item Total</Text>
                        <Text style={styles.TextNumberRupee}>₹ 365</Text>
                        </View>
                        <View style={styles.ViewDelvery}>
                        <Text style={styles.TextDeliveryBoy}>Delivery Fee | 4.9 kms </Text>
                        <Text style={styles.TextRupees29}>₹ 29</Text>
                        </View>
                        <Text style={styles.TextThisfee}>This fee goes towards paying your Delivery Partner fairy</Text>
                        <View style={styles.ViewDelveryTip}>
                            <Text style={styles.DelveryTip}> Delivery Tip</Text>
                            <Text style={styles.ADDTip}>ADD Tip</Text>
                        </View>
                        <View style={styles.ViewCharges}>
                        <Text style={styles.Charges}>Texes and Charges</Text>
                        <Text style={styles.Taxes}>₹ 24</Text>
                        </View>
                        <View style={{borderBottomWidth:1,borderColor:"#6B6762",marginVertical:10}}></View>
                        <View style={styles.ViewToPay}>
                            <Text style={styles.ToPay}>To Pay</Text>
                            <Text style={styles.ToPay2}>₹ 420</Text>
                        </View>
                        <Text style={styles.AddressDetailes}>Review your order and address details to avoid cancellations</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate("Delivery")}style={styles.ViewConformOrder}>
                            <Text style={styles.CONFIRMORDER}>CONFIRM ORDER</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>

        </ScrollView>
    )
}

export default Instamart

const styles = StyleSheet.create({

    MainView: {
        flex: 1,
        backgroundColor: "#fff",
        // padding: 10
    },
    IconPathArror: {
        resizeMode: "contain",
        height: 25,
        width: 25
    },
    IconPathHiht: {
        marginVertical: 20

    },
    MyCart: {
        color: "black",
        fontSize: 25,
        fontWeight: "normal"
    },
    FlatList: {
        marginVertical: 20
    },
    FlatListWidth: {
        backgroundColor: "#FF0059",
        padding: 10,
        borderRadius: 20,
        width: 70,
        marginVertical: 20
    },
    Mooms: {
        color: "#000",
        fontSize: 20,
        fontWeight: "800"
    },
    Rupees: {
        color: "#000",
        fontSize: 18,
        fontWeight: "600"
    },
    MoomsSouse: {
        fontWeight: "normal",
        fontSize: 18,
    },

    TextNumberPluse: {
        color: "#fff",
        fontWeight: "400",
        fontSize: 18,
        textAlign: "center"
    },
    TextSub: {
        color: "white",
        fontWeight: "bold"
    },
    TextNumberCount: {
        color: "white",
        fontWeight: "bold"
    },
    MainView2:{
        // width:"100%",
        flex:1,
        backgroundColor:"#FEB86029",
        padding:12
    },
    MainWidth:{
        borderBottomWidth:1,
        borderColor:"#6B6762",
        marginVertical:20,
        // marginHorizontal:10
    },
    TextNumerItem:{
        fontSize:18,
        fontWeight:"600",
        color:"#000"
    },
    TextNumberRupee:{
        fontSize:18,
        fontWeight:"600",
        color:"#000"
    },
    ViewItemNumber:{
       flexDirection:"row",
       justifyContent:"space-between",
       marginVertical:10
    //    paddingHorizontal:20 ÷
    },
    TextDeliveryBoy:{
        fontSize:20,
        fontWeight:"400",
        color:"#000"  
    },
    TextRupees29:{
    fontSize:18,
    fontWeight:"400",
    color:"#000"
    },
    ViewDelvery:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10
},
TextThisfee:{
   color:"#585555BA",
   fontSize:18,
   fontWeight:"400" 
},
DelveryTip:{
    fontSize:18,
    fontWeight:"600",
    color:"#000"
},
ADDTip:{
    fontSize:18,
    fontWeight:"600",
    color:"#FF001F"
},
ViewDelveryTip:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10
},
Charges:{
    fontSize:18,
    fontWeight:"600",
    color:"#000"
},
Taxes:{
    fontSize:18,
    fontWeight:"600",
    color:"#000"
},
ViewCharges:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10,
    width:"92%"
},
ToPay:{
    fontSize:18,
    fontWeight:"600",
    color:"#000"
},
ToPay2:{
    fontSize:18,
    fontWeight:"600",
    color:"#000"
},
ViewToPay:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10,
    width:"94%"
},
AddressDetailes:{
    fontSize:18,
    fontWeight:"600",
    color:"#000"
},
CONFIRMORDER:{
    color:"#fff",
    fontSize:20,
    fontWeight:"700",
    // textAlign:"center"
    
},
ViewConformOrder:{
    backgroundColor:"#FF0059",
    borderRadius:10,
    padding:20,
   
    marginHorizontal:10,
    alignItems:'center',
    marginVertical:20
},
TextNumberPluse2: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
    textAlign: "center"
},
TextSub2: {
    color: "white",
    fontWeight: "bold"
},
TextNumberCount2: {
    color: "white",
    fontWeight: "bold"
},
})