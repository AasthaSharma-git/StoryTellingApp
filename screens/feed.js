
import React from 'react';
import {Text,View,StyleSheet,StatusBar,Platform,SafeAreaView,Image} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {FlatList} from 'react-native-gesture-handler'
import StoryCard from './StoryCard';
let customFont={'Bubblegum-Sans':require('../assets/fonts/BubblegumSans-Regular.ttf')}
let stories=require('./temp.json');


export default class Feed extends React.Component{
    constructor(){
        super()
        this.state={fontsLoaded:false}
    }
    componentDidMount(){
        this._loadFontsAsync();
    }
    async _loadFontsAsync(){
       await Font.loadAsync(customFont);
       this.setState({fontsLoaded:true});
    }

    renderItem = ({ item: story }) => {
        return <StoryCard story={story} navigation={this.props.navigation} />;
      };


    render(){
        if(!this.state.fontsLoaded){
            return(
                <AppLoading/>
            )
        }
        else{
            return(
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
                <View style={styles.cardContainer}>
                  <FlatList 
                   keyExtractor={this.keyExtractor}
                   data={stories}
                   renderItem={this.renderItem}
                  
                  />

                </View>

                


              </View>
            )
        }
       
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
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
      cardContainer: {
        flex: 0.93
      }
})

