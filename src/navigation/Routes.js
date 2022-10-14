import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screen/Welcome';
import ButtomTab from './ButtomTob';
import Login from './Login';
import MyAccount from './My Account';
import Favourites from './Favourites';
import FoodMenu from '../screen/FoodMenu';
import Order from '../screen/Order';
import Delivery from '../screen/Delivery';
import Instamart from '../screen/Instamart';
import Mep from '../screen/Mep';
import Logout from '../screen/Logout';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Wellcome'>
        <Stack.Screen name="Welcome" component={ButtomTab}options={{headerShown:false}} />
        {/* <Stack.Screen name="Welcome" component={Welcome}options={{headerShown:false}} /> */}
        <Stack.Screen name="Login" component={Login}options={{headerShown:false}} />
        <Stack.Screen name="MyAccount" component={MyAccount}options={{headerShown:false}} />
        <Stack.Screen name="Favourites" component={Favourites}options={{headerShown:false}} />
        <Stack.Screen name="FoodMenu" component={FoodMenu}options={{headerShown:false}} />
        <Stack.Screen name="Order" component={Order}options={{headerShown:false}} />
        <Stack.Screen name="Delivery" component={Delivery}options={{headerShown:false}} />
        <Stack.Screen name="Instamart" component={Instamart}options={{headerShown:false}} />
        <Stack.Screen name="Mep" component={Mep}options={{headerShown:false}} />
        <Stack.Screen name="Logout" component={Logout}options={{headerShown:false}} />









      </Stack.Navigator>
      
    </NavigationContainer>
 
  );
};
export default Routes; 