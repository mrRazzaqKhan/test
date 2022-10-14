import React from 'react';
import { Text, View, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native';
import { IconPath } from '../Assests';
import { useState } from 'react';

const Favourites = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [khnakhan, setkhankhan] = useState(false)
    const toggleSwitch1 = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch = () => setkhankhan(previousState => !previousState);


    return (
        <View style={{ flex: 1, marginVertical: 20, marginHorizontal: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={()=>navigation.goBack("Favourites")}>
<Image source={IconPath.Back} />
</TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "#000", left: 10 }}>Setting</Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: "500", left: 30 }}>PICTURE IN PICTURE MODE</Text>
            <View style={{ borderBottomWidth: 1, borderColor: "black", marginVertical: 20 }}></View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "black" }}>Allow Picture in Picture Mode</Text>
                <Switch
                    trackColor={{ false: "#FF0059", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#FF0059"
                    onValueChange={toggleSwitch1}
                    value={isEnabled}
                />
            </View>
            <View style={{ borderBottomWidth: 1, marginVertical: 20 }}></View>
            <Text value={isEnabled} >PIP mode allows you to live track your order in a small window pinned to one corner of your screen while you navigate to other apps or to the home screen.</Text>
            <Text style={{ marginVertical: 20, color: "#000" }}>SMS PREFERENCES</Text>
            <Text>Order related SMS cannot be disabled as they are ceitical to provide service</Text>
            <View style={{ borderBottomWidth: 1, marginVertical: 20 }}>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "black" }}>Recommendations & Reminders</Text>
                <Switch
                    trackColor={{ false: "#FF0059", true: "#81b0ff" }}
                    thumbColor={khnakhan ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#FF0059"
                    onValueChange={toggleSwitch}
                    value={khnakhan}
                />
            </View>
        </View>
    );
};

export default Favourites;
const styles = StyleSheet.create({

});