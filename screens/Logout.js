import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import firebase from "firebase";

export default class Logout extends React.Component{
    componentDidMount(){
        firebase.auth().signOut();
    }
    
    render(){
        return(
            <Text>Logout</Text>
        )
    }
}