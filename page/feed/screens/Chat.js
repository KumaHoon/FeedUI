import React from 'react';
import { Text, View, Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get('window');

const Chat = ({navigation}) =>{
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
                backgroundColor: 'white',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: 15,
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.pop()}> 
                    <Ionic name="arrow-back" style={{fontSize: 26, color: "black"}}/>
                </TouchableOpacity>
                <View style={{position:"absolute", left:width/2-42 }}>
                    <Text style ={{fontSize: 21, color : "black", fontWeight:"bold"}}>
                        대화목록
                    </Text>
                </View>
            </View>

            <View style={{flex:0.9, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize: 15,color:'grey'}}>
                    대화가 없습니다.
                </Text>
            </View>


        </View>
    )
}

export default Chat;