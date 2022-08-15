import React from 'react';
import { Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Post from "../screenComponents/Post.js"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const { width, height } = Dimensions.get('window');

const Home = () =>{
    
    return (
        <View style={{backgroundColor: 'white', height:'100%'}}>
            <Post/>
            <View style= {{position:'absolute', left: width*0.85}}>
                <TouchableOpacity onPress={() => alert('글작성!')}>
                    <MaterialIcons name="add-circle" style = {{fontSize: 45, color: '#2699fb'}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;