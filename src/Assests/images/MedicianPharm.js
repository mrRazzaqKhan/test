import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

const MedicianPharm = ({ navigation }) => {
    const [name,setname] = useState(5)
    // const [khan,setkhan] = useState(5)
    return (
        // <SafeAreaView>

        <View style={styles.MainView}>

            <View style={styles.ViewSarch}>
                <Image style={styles.ImageSarch}
                    source={require("../images/yyy.png")}
                />
                <TextInput
                    placeholder='100,000 medicines and products'
                />
            </View>
            <ScrollView>

                <View style={styles.ProductsView}>
                    <Text style={styles.ProductsText}>Products of the day </Text>
                    <Image
                        source={require("../images/mm.png")}
                    />
                </View>
                <View style={styles.CantnairMain}>
                    <Image style={styles.Sypimage}
                        source={require("../images/Syp.png")}
                    />
                    <Text style={styles.NurofenText}>
                        Nurofen for children {"\n"}
                        suspension 230 ml</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20, width: "40%" }}>
                        <Image
                            source={require("../images/star1.png")}
                        />
                        <Image
                            source={require("../images/star1.png")}
                        />
                        <Image
                            source={require("../images/star1.png")}
                        />
                        <Image
                            source={require("../images/star1.png")}
                        />
                        <Image
                            source={require("../images/star2.png")}
                        />
                    </View>
                    <View style={styles.NumberMain}>
                        <Text style={styles.NumberText}>Rs. 131 </Text>
                        <Text style={styles.NumbertText2}>356</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                        <View style={{ flexDirection: "row", right: 10 }}>
                            <View style={styles.Cantnair}>
                                <Text style={styles.NumberOf}>-</Text>
                            </View>
                            <Text style={{ color: '#000', fontSize: 20, margin: 5 }}>0</Text>
                            <View style={styles.Cantnair}>
                                <Text style={styles.NumberOf}>+</Text>

                            </View>

                        </View>
                        <Image
                            source={require("../images/ggg.png")}
                        />
                    </View>
                </View>
                <View style={styles.ProductsView}>
                    <Text style={styles.ProductsText}>Offers 3 </Text>
                    <Image
                        source={require("../images/mm.png")}
                    />
                </View>
                <View style={styles.CantnairSize}>
                    <View style={styles.CantnairWh}>
                        <View style={{ flexDirection: "row", }}>
                            <View style={styles.CantnairImage}>
                                <Image source={require("../images/Ve.png")} />
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: '500', color: '#000', left: 30 }}>
                                Product{"\n"}
                                weeks</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.ProductsView}>
                    <Text style={styles.ProductsText}>Categories </Text>
                    <Image
                        source={require("../images/mm.png")}
                    />
                </View>
                <View style={styles.CantnairHai}>
                    <View style={{ width: 175, height: 139, backgroundColor: '#F0F3F7', alignItems: 'center' }}>
                        <Image source={require("../images/image.png")} />
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: "700", color: "#000", marginTop: 20, left: 10 }}>Allergy</Text>

                </View>
                <View style={styles.CantnairHai}>
                    <View style={{ width: 175, height: 139, backgroundColor: '#F0F3F7' }}>
                        <Image source={require("../images/image.png")} />
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: "700", color: "#000", marginTop: 20, left: 10 }}>Allergy</Text>

                </View>
                <View style={styles.CantnairMain}>
                    <Image style={styles.Sypimage}
                        source={require("../images/hh.png")}
                    />
                    <Text style={styles.NurofenText}>
                        Nurofen for children {"\n"}
                        suspension 230 ml</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20, width: "40%" }}>
                        <Image
                            source={require("../images/star1.png")}
                        />
                        <Image
                            source={require("../images/star1.png")}
                        />
                        <Image
                            source={require("../images/star1.png")}
                        />
                        <Image
                            source={require("../images/star1.png")}
                        />
                        <Image
                            source={require("../images/star2.png")}
                        />
                    </View>
                    <View style={styles.NumberMain}>
                        <Text style={styles.NumberText}>Rs. 131 </Text>
                        <Text style={styles.NumbertText2}>356</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                        <View style={{ flexDirection: "row", right: 10 }}>
                            <TouchableOpacity onPress={()=>setname(name-1)} style={styles.Cantnair}>
                                <Text style={styles.NumberOf}>-</Text>
                                </TouchableOpacity>
                            <Text style={{ color: '#000', fontSize: 20, margin: 5 }}>{name}</Text>
                            
                                <TouchableOpacity onPress={()=>setname(name+1)} style={styles.Cantnair}>
                                    <Text style={styles.NumberOf}>+</Text>
                                    </TouchableOpacity>
                            

                        </View>
                        <Image
                            source={require("../images/ggg.png")}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20, alignItems: "center" }}>
                    <View style={styles.MainCantnair}>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: "#000" }}>Consuite Doctor</Text>
                        <Text style={{ color: "#ABAFB3" }}>Adivec from skilled doctor</Text>
                    </View>
                    <View style={{ width: 50, height: 30, backgroundColor: "#E5E5E5", borderRadius: 15, justifyContent: "center", alignItems: "center", }}>
                        <Text style={{ color: "#37B9C5", fontSize: 14, fontWeight: "500" }}>Get</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20, alignItems: "center" }}>
                    <View style={styles.MainCantnair}>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, color: "#000" }}>Consuite Doctor</Text>
                        <Text style={{ color: "#ABAFB3" }}>Adivec from skilled doctor</Text>
                    </View>
                    <View style={{ width: 50, height: 30, backgroundColor: "#E5E5E5", borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "#37B9C5", fontSize: 14, fontWeight: "500", }}>Get</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Categories")} style={{ borderBottomWidth: 8, width: '50%', alignSelf: 'center', borderRadius: 10, marginBottom: '10%' }}></TouchableOpacity>



            </ScrollView>
        </View>

        // </SafeAreaView>


    );
};
const styles = StyleSheet.create({
    MainView: {
        padding: 20,

    },
    ViewSarch: {
        flexDirection: "row",
        justifyContent: "flex-start",
        // padding: 10, borderwidth:1,
        height: 40,
        backgroundColor: '#fff',
        width: "100%",
        borderRadius: 15,
        elevation: 15
    },
    ImageSarch: {
        margin: 10
    },
    ProductsText: {
        color: "#000000",
        fontSize: 25,
        fontWeight: "bold"
    },
    ProductsView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        alignItems: "center"
    },
    CantnairMain: {
        width: "50%",
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 10,
        padding: 10
    },
    Sypimage: {
        resizeMode: "contain"
    },
    NurofenText: {
        color: "#000000",
        fontWeight: "900",
        fontSize: 15
    },
    starImage: {
        marginVertical: 10,


    },
    NumberText: {
        color: "red",
        fontSize: 20,
        fontWeight: "bold",

    },
    NumbertText2: {
        color: " #d9d9d9",
        fontSize: 15,
        fontWeight: "bold",
        margin: 5
    },
    NumberMain: {
        flexDirection: "row",

    },
    Cantnair: {
        backgroundColor: "#e6f2ff",
        height: 40,
        width: 40,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    NumberOf: {
        fontSize: 15,
        color: "#000"
    },
    CantnairSize: {
        width: '98%',
        height: 150,
        backgroundColor: "#F196DD",
        elevation: 8,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CantnairWh: {
        width: '65%',
        justifyContent: "center",
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 40,

    },
    CantnairImage: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#F69FE4",
        borderRadius: 30,
        width: 50,
        height: 50,
        left: 5

    },
    CantnairHai: {
        width: "50%",
        // height: 196,
        backgroundColor: '#fff',
        elevation: 8,
        marginVertical: 15,
        borderRadius: 10
    },
    MainCantnair: {
        width: 75,
        height: 80,
        backgroundColor: "#C4C4C4",
        borderRadius: 10
    }
});
export default MedicianPharm;