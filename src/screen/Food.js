import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconPath, ImagePath } from '../Assests'
import LinearGradient from 'react-native-linear-gradient'

const Food = ({ navigation }) => {
    const Data = [
        {
            id: 1,
            images: ImagePath.h1,
            name: 'Barger'
        },
        {
            id: 2,
            images: ImagePath.h1,
            name: 'Barger'
        },
        {
            id: 3,
            images: ImagePath.h1,
            name: 'french'
        },
        {
            id: 4,
            images: ImagePath.pizza,
            name: 'pizza'
        },

    ]
    const Data1 = [
        {
            id: 1,
            image: ImagePath.Cheese,

            name: "cheese pizza",
            name1: "Oliva Food",
            name2: "(940 Ratings)"
        },
        {
            id: 2,
            image: ImagePath.Cheese,
            name: "cheese pizza",
            name1: "Oliva Food",
            name2: "(940 Ratings)"
        },

    ]
    const item1 = ({ item }) => {
        return (
            <View style={{ width: "50%", paddingRight: 10 }}>
                <View style={{ width: 320, padding: 8 }}>
                    <Image source={item.image} />
                    {/* <View> <Image source={IconPath.GPS}/> */}
                    {/* <Text> 2 KM</Text> */}
                    {/* </View> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={{ fontSize: 24, fontWeight: "700", color: "black" }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ tintColor: "#6B6762", resizeMode: "cover", right: 15 }}
                                source={ImagePath.Address} />
                            <Text style={{ fontSize: 18, fontWeight: "400", right: 5 }}>2 KM</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.name1}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ resizeMode: "contain", height: 19, width: 19, top: 3 }}
                                source={ImagePath.Star} />
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>4.7</Text>
                            <Text style={{ fontSize: 18, fontWeight: "600", left: 3 }}>{item.name2}</Text>
                        </View>
                        <View style={{ backgroundColor: "#FF0059", padding: 10, borderRadius: 10, width: "25%", top: -15 }}>
                            <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>$9.88</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    const item = ({ item }) => {
        return (

            <View style={{ width: 150 }}>
                <LinearGradient colors={["#FF0059", "#F4C21087"]} style={{ width: "70%", borderRadius: 8, justifyContent: 'center', alignItems: 'center', padding: 15 }}>

                    <Image source={item.images} />

                    <Text >{item.name}</Text>

                </LinearGradient>
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={styles.MainView}>
                <SafeAreaView>
                    <Image source={IconPath.Login} />
                    <View style={{ marginVertical: 20 }}>
                        <View style={styles.DeliverView}>
                            <Text style={styles.Deliver}>DELIVER TO</Text>
                        </View>
                        <TouchableOpacity onPress={()=> navigation.navigate("Mep")} style={styles.MainView2}>
                            <Image source={IconPath.GPS} />
                            <Text style={styles.TextHome}>Home. Mansorovar jaipur</Text>
                            <Image style={styles.IconDawon}
                                source={IconPath.arrordawon} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <View style={{ backgroundColor: '#A1A1A1', flexDirection: 'row', alignItems: 'center', width: '85%', borderRadius: 8 }}>
                        <Image source={IconPath.Sarch} style={styles.Sarchs} />
                        <TextInput placeholder='Search for food' style={styles.width} />
                    </View>
                    <View style={styles.ViewCantanir}>
                        <Image source={IconPath.Sound} />
                    </View>
                </View>
                <Image style={styles.food}
                    source={ImagePath.Food2} />
                <Text style={styles.Categories}>Categories</Text>
                <View style={{ height: 100 }}>
                    <FlatList
                        data={Data}
                        renderItem={item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.DishesView}>
                    <Text style={styles.Dishes}>Popular Dishes</Text>
                </View>
                <FlatList
                    data={Data1}
                    renderItem={item1}
                    horizontal

                />
                <TouchableOpacity onPress={() => navigation.navigate("FoodMenu")} style={styles.Button}>
                    <Text style={styles.TextEXFALOR}>EXPLORE Food</Text>
                </TouchableOpacity>







            </View>
        </ScrollView>
    )
}

export default Food

const styles = StyleSheet.create({
    MainView: {
        flex: 1,
        backgroundColor: "#FFF",
        padding: 10
    },
    Deliver: {
        fontWeight: "500"
    },
    DeliverView: {
        left: 28
    },
    TextHome: {
        fontSize: 16,
        fontWeight: "500",
        color: "black",
        left: 10
    },
    MainView2: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    Sarch: {
        height: 25,
        width: 25,
        top: -60,
        left: 10
    },
    ViewCantanir: {
        width: 40,
        // height:40,
        backgroundColor: "#FF0059",
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconDawon: {
        left: 15
    },
    Sarchs: {
        resizeMode: "contain",
        width: 30,
        height: 25,
        paddingLeft: 10
    },
    width: {
        width: '95 %'
    },
    IconSound: {
        resizeMode: "contain",
    },
    food: {
        width: "100%",
        borderRadius: 10
    },
    Categories: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
        marginVertical: 10
    },
    Dishes: {
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
    DishesView: {
        marginVertical: 20
    },
    Button: {
        padding: 10,
        backgroundColor: "#FF0059",
        borderRadius: 15,
        width: "70%",
        alignSelf: "center",
        marginVertical: 10
    },
    TextEXFALOR: {
        fontSize: 20,
        fontWeight: "800",
        color: "#FFF",
        textAlign: "center"
    }






})