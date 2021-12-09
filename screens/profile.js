import React, { Component } from "react";
import { StyleSheet, Text, View ,StatusBar,Platform,SafeAreaView,Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as firebase from 'firebase';

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      name:"",
      image:"",
      email:"",
      light_theme:false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  fetchUser=async()=>{
     var name,image,theme,email;
    await firebase 
                 .database()
                 .ref("/users/"+firebase.auth().currentUser.uid)//Change 1
                 .on("value",function(snapshot){
                      theme=snapshot.val().current_theme,
                      name=`${snapshot.val().first_name} ${snapshot.val().last_name}`
                      image=snapshot.val().profile_picture
                      email=snapshot.val().gmail
    })
    console.log(name)
      this.setState({
          light_theme: theme==='light'?true:false,
          name:name,
          image:image,
          email:email
      })
  }


  componentDidMount() {
    this._loadFontsAsync();
    this.fetchUser();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />
    } else {
      return (
        <View style={styles.container}>
           <SafeAreaView style={styles.androidSafeArea}></SafeAreaView>
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image source={require('../assets/logo.png')}
                            style={styles.iconImage}></Image>
                         </View>

                        <View style={styles.appTitleTextContainer}>
                      <Text style={styles.appTitleText}>Storytelling App</Text>
                       </View>

                    </View>
        
                 <View style={styles.screenContainer}>
                      <View style={styles.profileImageContainer} >
                          <Image source={{uri:this.state.image}} style={styles.profileImage}></Image>
                      </View>
                      <Text style={styles.nameText}>{this.state.name}</Text>
                      <Text style={styles.nameText}>{this.state.email}</Text>

                 </View>

                 <View style={{ flex: 0.3 }} />
        
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15193c"
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  }, 
  screenContainer: {
    flex: 0.85
  },
  profileImageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70)
  },
  nameText: {
    color: "white",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginTop: RFValue(10)
  },
});