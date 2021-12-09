import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateStory from '../screens/createStory';
import Feed from '../screens/feed';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';

const Tab=createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
  return (
   
     <Tab.Navigator 
           labeled={false}
           activeColor='orange'
     >
       <Tab.Screen name='Feed' component={Feed} 
       options={{
         tabBarIcon:({color})=>(
           <Ionicons name='library-outline'size={24} color={color} style={styles.icons}></Ionicons>
         )
       }}></Tab.Screen>
        <Tab.Screen name='Create Story' component={CreateStory} options={{
         tabBarIcon:({color})=>(
          <Ionicons name='newspaper-outline' size={24} color={color} style={styles.icons}></Ionicons>
         )
       }}></Tab.Screen>
     </Tab.Navigator>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'hidden',
    position:'absolute'
  },
  icons:{
      width:RFValue(30),
      height:RFValue(30)
  }
});

export default BottomTabNavigator;
