import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity,ScrollView } from 'react-native';
import { ImagePath } from '../Assests';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

const FoodMenu = ({navigation}) => {
  const Data = [
    {
      id: 1,
      images: ImagePath.Fastfood,
      name: 'Moms'
    },
    {
      id: 1,
      images: ImagePath.Fastfood,
      name: 'Moms'
    },
    {
      id: 1,
      images: ImagePath.Fastfood,
      name: 'Moms'
    },
    {
    id: 1,
    images: ImagePath.Fastfood,
    name: 'Moms'
    }

  ]
  const Data1= [
    {
      id: 1,
      images: ImagePath.pizz,
      name: 'Pizzatali'
    },
    {
      id: 1,
      images: ImagePath.pizz,
      name: 'Pizzatali'
    },
    {
      id: 1,
      images: ImagePath.pizz,
      name: 'Pizzatali'
    },
    {
      id: 1,
      images: ImagePath.pizz,
      name: 'Pizzatali'
    },
  ]

  const item = ({ item }) => {
    return (
      
      <View style={styles.MainView2}>
        <LinearGradient colors={["#FF0059", "#F4C21087"]} style={{ width:'90%', borderRadius: 8, }}>
          <View style={styles.ImageCantnair}>
            <Image source={item.images} />
            <Text style={styles.TextCantnair2}>{item.name}</Text>
          </View>
        </LinearGradient>
      </View>
    )
  }
  const item1 = ({ item }) => {
    return (
      
     <View style={{width:190}}>
<Image source={item.images}/>
<Text style={{fontSize:16,fontWeight:"800",color:"black"}}>{item.name}</Text> 
     </View>
    )
  }
  return (
    <ScrollView>
    <View style={styles.MainView}>
      <SafeAreaView>

        <Text style={styles.FoodMenu}>FOOD MENU</Text>
        <View style={styles.ViewCantanir}>
          <Text style={styles.TextCantnair}>Choose your best  food have a great day</Text>
        </View>
        <View style={{ }}>
          <FlatList
            data={Data}
            renderItem={item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

        </View>
      </SafeAreaView>
      <Text style={styles.TextCantnairMore}>More</Text>
      <View style={{flexDirection:"row",justifyContent:"center",justifyContent:"space-around"}}>
     
      <View style={styles.ViewWidth2}>
        <View style={styles.ViewNew}>
          <Text style={styles.TextNew}>New</Text>
          {/* <Image source={ImagePath.JJJ}/> */}
        </View>
      </View>
      <View style={styles.ViewWidth1}>
        <View style={styles.ViewCantanirNew}>
          <Text style={styles.TextCantnairNew}>New</Text>
        </View>
        <Image style={styles.ImagePathDinair}
          source={ImagePath.ppp} />
        <Text style={styles.TextCantnairCholeBhature}>Panner</Text>
        <View style={styles.ViewMainADD}>
        <Text style={styles.TextCantnairNumber}><Text style={{color:'red'}}>$ </Text>9.62</Text>
        <TouchableOpacity style={styles.ButtonAdd}>
<Text style={styles.TextCantnairADD}>ADD</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
      <View style={{marginHorizontal:10,marginVertical:10}}>
      <Text style={{color:"#000",fontWeight:"normal",fontSize:16}}>Popular Dishes</Text>
      </View>
      <FlatList
       data={Data1}
       renderItem={item1}
       horizontal
       showsHorizontalScrollIndicator={false}
      />
      <View style={{marginVertical:20,height:300}}>
        <Swiper autoplay={true} showsButtons={false} autoplayTimeout={3}>
      <Image source={ImagePath.Eat}/>
      <Image source={ImagePath.Eat}/>
      <Image source={ImagePath.Eat}/>
      </Swiper>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Order")} style={styles.ButtanOder}>
      <Text style={styles.TextButton}>ORDER NOW</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default FoodMenu ;
const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: "#FFF",

  },
  FoodMenu: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FF0059",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 40
  },
  ViewCantanir: {
    marginVertical: 10
  },
  TextCantnair: {
    textAlign: "center"
  },
  MainView2: {
    marginVertical: 20
  },
  ImageCantnair: {
    alignItems: "center"
  },
  TextCantnair2: {
    fontSize: 16,
    color: "#fff"
  },
  TextCantnairMore: {
    color: "#000",
    fontSize: 25,
    fontWeight: "bold"
  },
  ViewWidth1: {
    backgroundColor: "#E5E5E5",
    // width: "40%",
    padding: 10,
    borderRadius: 10,
    // marginHorizontal: 20
  },
  ViewCantanirNew: {
    backgroundColor: "#FF0059",
    width: 35,
    alignSelf: "center",
    top: -10
  },
  TextCantnairNew: {
    color: "#fff",
    textAlign: "center"
  },
  ImagePathDinair: {
    
  width:"95%"
  
  },
  TextCantnairCholeBhature: {
    color: "#000",
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center"
  },
  TextCantnairNumber:{
    fontSize:15,
  color:"#000",
  fontWeight:"800",
  top:10
  },
  ButtonAdd:{
    backgroundColor:"#FF0059",
    borderRadius:20,
  
    padding:5
  },
  TextCantnairADD:{
    fontSize:16,
    color:"#fff",
    textAlign:"center",
    
  },
  ViewMainADD:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10
  },
  ButtanOder:{
    backgroundColor:"#FF0059",
    padding:10,
    borderRadius:15,
    alignSelf:"center",
    width:"80%",
    marginVertical:20
  },
  TextButton:{
    color:"#fff",
    fontSize:20,
    fontWeight:"900",
    textAlign:"center"
  },
  ViewWidth2:{
    backgroundColor: "#E5E5E5",
    width: "40%", 
    borderRadius:15
  },
  ViewNew:{
    backgroundColor: "#FF0059",
    width: 35,
    alignSelf: "center",
    
  },
  TextNew:{
    color:"#fff",
    textAlign:"center"
  }


})