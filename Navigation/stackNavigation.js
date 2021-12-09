import React from 'react'
import {Stylesheet} from 'react-native'
import BottomTabNavigator from './tabNavigation'
import Story from '../screens/story'
import { createStackNavigator } from '@react-navigation/stack'

const Stack=createStackNavigator();

const StackNavigator=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={BottomTabNavigator} ></Stack.Screen>
            <Stack.Screen name="Story" component={Story}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackNavigator;