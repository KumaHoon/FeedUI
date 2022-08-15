import React from 'react';
import { Text, View, Dimensions, TouchableOpacity} from 'react-native';
import QnAPost from "../screenComponents/QnAPost.js"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const { width, height } = Dimensions.get('window');

const QnA = () =>{
    
    return (
        <View style={{backgroundColor: 'white', height:'100%'}}>
            <QnAPost/>
            <View style= {{position:'absolute', left: width*0.85}}>
                <TouchableOpacity onPress={() => alert('글작성!')}>
                    <MaterialIcons name="add-circle" style = {{fontSize: 45, color: '#2699fb'}}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default QnA;