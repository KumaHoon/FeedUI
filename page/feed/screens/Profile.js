import React from 'react';
import {
    Image,
    Text,
    View,
    Dimensions,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {ProfileTop} from "../screenComponents/Toptab.js";
import MyPost from "../screenComponents/MyPost.js"


const { width, height } = Dimensions.get('window');

const Profile = () =>{
    return (
        <View style={{backgroundColor: '#f1f9ff', height:'100%'}}>
            <ProfileTop name = "내 프로필"/>
            <SafeAreaView style = {styles.screen}>
                <View style={{marginTop: 30, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.avatar} source = {require('../storage/icons/user.jpg')}/>
                        <View style={{
                            flexDirection:'column', 
                            marginLeft:width/7, 
                            alignItems:'center', 
                            justifyContent:'center'
                            }}>
                            <Text style={styles.userName}>주먹펴고일어서</Text>
                            <Text>qwerasdf@hanyang.ac.kr</Text>
                            <Text>한양고등학교 학생</Text>
                            <View style={{marginTop: height/60, flexDirection:'row', justifyContent:'space-between', width: (width/5)*2}}>
                                <Text style={{fontSize: 16, fontWeight:'bold', color:'black'}}>
                                    팔로워 1
                                </Text>
                                <Text style={{fontSize: 16, fontWeight:'bold', color:'black'}}>
                                    게시물 1
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                            <SimpleLineIcons name = "user-following" style={{fontSize:22, color: "#2699fb"}}/>
                            <Text style ={{marginTop:5, color:'grey'}}> 팔로우 중 </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                            <SimpleLineIcons name = "pencil" style={{fontSize:22, color: "#2699fb"}}/>
                            <Text style ={{marginTop:5, color:'grey'}}> 업로드 </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection:'row', marginTop:height/40}}>
                    </View>
                    <View>
                        <Text>
                            웹디자이너가 꿈인 고등학교 1학년입니다.
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
            <MyPost/>
        </View>

    )
}

export default Profile;

const styles = StyleSheet.create({
    screen: {
        flex:0.8,
        alignItems: 'center',
        borderBottomWidth: 0.8,
        borderBottomColor: 'grey',
        backgroundColor:'white'
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius : 50,
    },
    userName: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: 'black',
    },
    btn: {
        width: 100,
        borderRadius: 10,
        marginTop: 20,
        alignItems:'center',
        marginLeft: width/7,
        marginRight: width/7,
    }
})