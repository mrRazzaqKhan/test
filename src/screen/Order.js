import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView } from 'react-native'
import React,{ useState }  from 'react'
import { ImagePath } from '../Assests'
import Swiper from 'react-native-swiper'
import { IconPath } from '../Assests'



const Order = () => {
  const [count, setcount]=useState(0)
  const[count1,setcount1]=useState(0)
  return (
    <ScrollView>
    <View style={styles.MainView}>
      <View style={{height:430}}>
      <Swiper autoplay={true}showsButtons={false}autoplayTimeout={3}>
      <Image source={ImagePath.Rectangle}/>
      <Image source={ImagePath.Rectangle}/>
      <Image source={ImagePath.Rectangle}/>

      </Swiper>
      </View>
      <View style={styles.MainView3}>
      <View style={styles.MainView2}>
      <View style={styles.ViewPannir}>
        <Image style={styles.ImagePathPanner}
         source={ImagePath.pppnir}/>
       
        <Text style={styles.TextPanner}>Panner</Text>
        </View>
      </View>
      <View>
      <Text style={styles.TextNumber1}>Paneer Butter Masala</Text>
      <Text style={styles.TextNumber2}>3.8(500+)45min</Text>
      <Text style={styles.TextNumber3}>EXTRA 20% OFF </Text>
      <Text style={styles.TextNumber4}>AND FREE DELIVERY</Text>
      <Text style={styles.TextNumber5}>ONE</Text>
      <Text style={styles.TextNumber6}>BENEFITS</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
      <Text style={styles.TextNumber7}>$ 9.62</Text>
      <View style={styles.ViewWidth}>
<View style={{flexDirection:"row",justifyContent:"space-between"}}>
<TouchableOpacity onPress={()=>setcount(count+1)}><Text style={styles.TextNumber8}>+</Text></TouchableOpacity>
<Text style={styles.TextNumber9}>{count}</Text>
<TouchableOpacity onPress={()=>setcount(count-1)}><Text style={styles.TextSub}>-</Text></TouchableOpacity>
      </View>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <Image source={IconPath.str1}/>
      <Image source={IconPath.str1}/>
      <Image source={IconPath.str1}/>
      <Image source={IconPath.str1}/>
      </View>

      </View>
      </View>
      <View style={styles.MainViewitli}>
      <View style={styles.MainView2}>
      <View style={styles.ViewPannir}>
        <Image style={styles.ImagePathPanner}
         source={ImagePath.pppnir}/>
       
        <Text style={styles.TextIdliSambhar}>Idli Sambhar</Text>
        </View>
      </View>
      <View>
      <Text style={styles.TextNumber10}>Paneer Butter Masala</Text>
      <Text style={styles.TextNumber11}>3.8(500+)45min</Text>
      <Text style={styles.TextNumber12}>EXTRA 20% OFF </Text>
      <Text style={styles.TextNumber13}>AND FREE DELIVERY</Text>
      <Text style={styles.TextNumber14}>ONE</Text>
      <Text style={styles.TextNumber15}>BENEFITS</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>
      <Text style={styles.TextNumber16}>$ 9.62</Text>
      <View style={styles.ViewWidth}>
<View style={{flexDirection:"row",justifyContent:"space-between"}}>
<TouchableOpacity onPress={()=>setcount1(count1+1)}><Text style={styles.TextNumber17}>+</Text></TouchableOpacity>
<Text style={styles.TextNumber18}>{count1}</Text>
<TouchableOpacity onPress={()=>setcount1(count1 -1)}><Text style={styles.TextSub}>-</Text></TouchableOpacity>
      </View>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <Image source={IconPath.str1}/>
      <Image source={IconPath.str1}/>
      <Image source={IconPath.str1}/>
      <Image source={IconPath.str1}/>
      </View>

      </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Order;

const styles = StyleSheet.create({
MainView:{
  flex:1
},
MainView2:{
  backgroundColor:"#F9E0E0",
  borderRadius:10,
  width:'45%',
  
  
},
ImagePathPanner:{
  resizeMode:"contain",
},
TextPanner:{
  fontSize:18,
  fontWeight:"700",
  color:"black",textAlign:"center",
  padding:10
},
ViewPannir:{
 alignSelf:"center" 
},
TextNumber1:{
  color:"#000"
},
TextNumber2:{
  color:"#000"
},
TextNumber3:{
  color:"#FF0059"
},
TextNumber4:{
  color:"#FF0059"
},
TextNumber5:{
  color:"#FF0059"
},
TextNumber6:{
  color:"#FF0059"
},
TextNumber7:{
  color:"#000"
},
MainViewitli:{
  flexDirection:"row",
  justifyContent:"space-around",
  marginVertical:20
},
ViewWidth:{
  backgroundColor:"#FF0059",
  padding:10,
  borderRadius:20,
  width:70
},
TextNumber8:{
  color:"#fff",
  fontWeight:"400",
  fontSize:18,
  textAlign:"center"
},
TextSub:{
  color:"white",
  fontWeight:"bold"
},
TextNumber9:{
  color:"white",
  fontWeight:"bold"
},
TextIdliSambhar:{
  fontSize:18,
  fontWeight:"700",
  color:"black",textAlign:"center",
  padding:10
},
ViewPannir:{
 alignSelf:"center" 
},
TextNumber10:{
  color:"#000"
},
TextNumber11:{
  color:"#000"
},
TextNumber12:{
  color:"#FF0059"
},
TextNumber13:{
  color:"#FF0059"
},
TextNumber14:{
  color:"#FF0059"
},
TextNumber15:{
  color:"#FF0059"
},
TextNumber16:{
  color:"#000"
},
MainView3:{
  flexDirection:"row",
  justifyContent:"space-around"
},
ViewWidth:{
  backgroundColor:"#FF0059",
  padding:10,
  borderRadius:20,
  width:70
},
TextNumber17:{
  color:"#fff",
  fontWeight:"400",
  fontSize:18,
  textAlign:"center"
},
TextSub:{
  color:"white",
  fontWeight:"bold"
},
TextNumber18:{
  color:"white",
  fontWeight:"bold"
}


});
