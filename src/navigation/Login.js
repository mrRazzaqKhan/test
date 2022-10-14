import  React ,{useRef} from 'react';
import { View,Text,StyleSheet,Image, TextInput, TouchableOpacity, ScrollView, } from 'react-native';
import { IconPath } from '../Assests';
import { ImagePath } from '../Assests';

const Login = ({navigation}) => {
    const oneInput = useRef();
    const twoInput = useRef();
    const threeInput = useRef();
    const fourInput = useRef();
  return (
    <ScrollView>
 <View style={styles.MainView}>
    <View style={styles.MainView2}>
    <View style={styles.ImageView}>
    <Image style={styles.ImageArror}
    source={IconPath.Arror}/>
    </View> 
    <Image style={styles.ImageFood} 
    source={ImagePath.Food}
    />
    </View>
    <View style={styles.MainView3}>
        <View style={styles.OTPView}>
    <Text style={styles.OTP}>OTP</Text>
    </View>
    <View style={styles.SendOTPView}>
        <Text style={styles.TextOTP}>Enter OTP to send</Text>
        <Text style={styles.TextNumber}>8432499696</Text>
    </View>
    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:40}}>
    <View style={{backgroundColor:"#FFF2F2",padding:10,width:50,borderRadius:10,elevation:10}}>
        <TextInput ref={oneInput}  maxLength={1}style={{fontSize:25,textAlign:"center"}} onChangeText={(Text)=>{Text && twoInput.current.focus()}}/>
    </View>
    <View style={{backgroundColor:"#FFF2F2",padding:10,width:55,borderRadius:10,elevation:10}}>
        <TextInput maxLength={1} onChangeText={(Text)=>{Text ? threeInput.current.focus () :oneInput.current.focus()}} ref={twoInput} style={{fontSize:25,textAlign:"center"}}/>
    </View>
    <View style={{backgroundColor:"#FFF2F2",padding:10,width:55,borderRadius:10,elevation:10}}>
        <TextInput onChangeText={(Text)=>{Text ? fourInput.current.focus(): twoInput.current.focus()}} ref={threeInput} maxLength={1}style={{fontSize:25,textAlign:"center"}}/>
    </View>
    <View style={{backgroundColor:"#FFF2F2",padding:10,width:55,borderRadius:10,elevation:10}}>
        <TextInput onChangeText={(Text)=>{!Text && threeInput.current.focus()}} ref={ fourInput} maxLength={1}style={{fontSize:25,textAlign:"center"}}/>
    </View>
    </View>
    <View style={styles.SumbitView}>
        <TouchableOpacity onPress={()=>navigation.navigate("MyAccount")}>
        <Text style={styles.SUMBIT}>SUBMIT</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.ViewReceiveOTP}>
        <Text style={styles.TextReceiveOTP}>Did’t Receive the OTP?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Logout")}>
        <Text style={styles.TextRESEND}> RESEND</Text>
        </TouchableOpacity>
    </View>
    </View>
 </View>
 </ScrollView>
  );
};

export default Login;
const styles=StyleSheet.create({
MainView:{
    flex:1,
    backgroundColor:"white",   
},
ImageArror:{
    tintColor:"#fff",
    height:18,
    width:18
},
ImageView:{
    marginHorizontal:20,
    marginVertical:20
},
ImageFood:{
    resizeMode:"contain",
    left:35,
    top:-15
},
MainView2:{
    backgroundColor:"#FF0059",
    height:"50%",   
},
MainView3:{
    backgroundColor:"white",
    width:"90%",
    height:"80%",
    alignSelf:"center",
    top:-40,
    elevation:10
},
OTP:{
    color:"black",
    fontSize:25,
    fontWeight:"normal"
},
OTPView:{
    marginVertical:20,
    marginHorizontal:20
},
TextOTP:{
    color:"#4A4747",
    fontSize:18
},
TextNumber:{
    color:"#FF0059",
    fontSize:18
},
SendOTPView:{
    flexDirection:"row",
    justifyContent:"center"
},
SumbitView: {
    marginTop: 60,
    padding: 15,
    backgroundColor: "#FF0059",
    borderRadius: 15,
    width: "70%",
    alignSelf: "center"
  },
  SUMBIT: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  TextReceiveOTP:{
    color:"#4A4747",
    fontSize:18
},
TextRESEND:{
    color:"#FF0059",
    fontSize:18
},
ViewReceiveOTP:{
    flexDirection:"row",
    justifyContent:"center",
    marginVertical:20
},
})