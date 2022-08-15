import React from 'react';
import { Text, View, StatusBar, Dimensions} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get('window');

export const ProfileTop = ({name}) => {
    return(
        <>
        <StatusBar 
        backgroundColor = "white" 
        barStyle = "dark-content" 
        animated={true}
        />
        <View style={{
            height: height/15,
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center'
        }}>
            <Entypo name="menu" style={{fontSize: 26, color: "black"}}/>
            <View style={{position:"absolute", left:width/5 * 2 }}>
                <Text style ={{fontSize: 21, color : "black", fontWeight:"bold"}}>
                    {name}
                </Text>
            </View>
            <Feather name="settings" style = {{fontSize: 24, color : "black"}}/>
        </View>
        </>
    )
}

const Toptab = ({name}) => {
    return(
        <>
        <StatusBar 
        backgroundColor = "white" 
        barStyle = "dark-content" 
        animated={true}
        />
        <View style={{
            height: height/15,
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
            backgroundColor: 'white',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center'
        }}>
            <Entypo name="menu" style={{fontSize: 26, color: "black"}}/>
            <View style={{position:"absolute", left:width/7 * 3 }}>
                <Text style ={{fontSize: 21, color : "black", fontWeight:"bold"}}>
                    {name}
                </Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Ionic name="search" style = {{fontSize: 24, color: "black"}}/>
                <Text>  </Text>
                <Entypo name="chat" style = {{fontSize: 24, color: "black"}}/>
            </View>
        </View>
        </>
    )
}

export default Toptab;