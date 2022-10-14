import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import Food from '../screen/Food';
import Instamart from '../screen/Instamart';
import Welcome from '../screen/Welcome';
import Genie from '../screen/Genie'
import { IconPath } from '../Assests';
import { Image } from 'react-native';
const Tab = createBottomTabNavigator();

const ButtomTab =()=> {
  return (
    <Tab.Navigator 
      initialRouteName="HomeScreen"
      
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Welcome}
        options={{headerShown:false,
          tabBarLabel: 'Home',
          

          
         tabBarIcon: ({ color, size }) => (
        <Image source={IconPath.home}style={{width:27,height:27}}/>
          
         )
        }}
      />
      <Tab.Screen
        name="Food"
        component={Food}
        options={{headerShown:false,
          tabBarLabel: 'Food',
          tabBarIcon: ({ color, size }) => (
        <Image source={IconPath.Food}/>
          ),
        
        }}
      />
      <Tab.Screen
        name="Instamart"
        component={Instamart}
        options={{headerShown:false,
          tabBarLabel: 'Instamart',
          tabBarIcon: ({ color, size}) => (
            <Image source={IconPath.Marketing}/>
          ),
        }}
      />
      <Tab.Screen
        name="Genie"
        component={Genie}
        options={{
          tabBarLabel: 'Genie',
          tabBarIcon: ({ color, size}) => (
            <Image source={IconPath.Vector}/>
          )
        }}
          />
    </Tab.Navigator>
  );
}

export default ButtomTab;