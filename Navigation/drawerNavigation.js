import React from 'react'
import {Stylesheet} from 'react-native'
import BottomTabNavigator from './tabNavigation'
import Profile from '../screens/profile'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackNavigator from './stackNavigation'
import Logout from '../screens/Logout'

const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={StackNavigator} ></Drawer.Screen>
            <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
            <Drawer.Screen name="Logout" component={Logout}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;