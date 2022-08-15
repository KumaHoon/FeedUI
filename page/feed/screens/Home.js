import React from 'react';
import { Text, View, Dimensions, StatusBar} from 'react-native';
import Post from "../screenComponents/Post.js"
import Entypo from "react-native-vector-icons/Entypo"
import Ionic from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get('window');

const Home = () =>{
    
    return (
        <View style={{backgroundColor: 'white', height:'100%'}}>
            <StatusBar 
            backgroundColor = "white" 
            barStyle = "dark-content" 
            animated={true}
            />
            <View style={{
                height: height/15,
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5,
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 15,
                alignItems: 'center'
            }}>
                <Entypo name="menu" style={{fontSize: 26, color: "black"}}/>
                <Text style ={{fontFamily: "Gugi-Regular",fontSize: 24, color : "black"}}>    잡소리</Text>
                <View style={{flexDirection:'row'}}>
                    <Ionic name="search" style = {{fontSize: 24, color: "black"}}/>
                    <Text>  </Text>
                    <Entypo name="chat" style = {{fontSize: 24, color: "black"}}/>
                </View>
            </View>
            
            <Post/>

        </View>
    )
}

export default Home;