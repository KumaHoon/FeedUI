
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Chat from './page/feed/screens/Chat';
import Contact from './page/feed/screens/Contact';
import Notice from './page/feed/screens/Notice';
import Setting from './page/feed/screens/Setting';
import Home from './page/feed/screens/Home';
import QnA from './page/feed/screens/QnA';
import Profile from './page/feed/screens/Profile';
import Contents from './page/feed/screens/Contents';
import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo"

const Drawer = createDrawerNavigator();

const App = () => {
  
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomeTabScreen = () => {
    return(
      <Tab.Navigator
          screenOptions = {({route}) => ({
          tabBarShowLabel: true,
          headerShown: false,
          tabBarStyle:{
            height: 50
          },

          tabBarIcon: ({focused, size, colour}) =>{
            let iconName;
            colour = "#2699fb";
            if(route.name === "홈"){
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size+8 : size+2;
            }
            // else if (route.name === "Search"){
            //   iconName = focused ? "search" : "ios-search-outline";
            // }
            else if (route.name === "컨텐츠"){
              iconName = focused ? "md-film" : "md-film-outline";
            }
            else if (route.name === "진로질문"){
              iconName = focused ? "questioncircle" : "questioncircleo";
              return <AntDesign name = {iconName} size = {size} color = {colour}/>
            }
            else if (route.name === "마이 페이지"){
              iconName = focused ? "ios-person-circle" : "ios-person-outline";
            }

            return <Ionic name = {iconName} size = {size} color = {colour}/>

          }

        })}>
          <Tab.Screen name="홈" component = {Home}/>
          <Tab.Screen name="컨텐츠" component = {Contents}/>
          <Tab.Screen name="진로질문" component = {QnA}/>
          <Tab.Screen name="마이 페이지" component = {Profile}/>
          
      </Tab.Navigator>
      
    )
  }

  const BottomTab = ({name}) => {
    return(
        <Stack.Navigator
          screenOptions={{
            headerShown : false
          }}>
          <Stack.Screen name = "Bottom" component={BottomeTabScreen}/>
        </Stack.Navigator>
    )
  }

  const TopTab = ({navigation}) => {
    return(
        <Drawer.Navigator
          initialRouteName="Home"
          drawerPosition="left"
          backBehavior="history"
          screenOptions={{
            headerShown: true,
            drawerLabelStyle: {
                  marginLeft: -2,
                  fontSize: 15,
            },
            drawerType: "slide",
            headerTitleStyle :{
                backgroundColor: 'white',
                elevation: 0,
                shadowOpacity: 0,
                fontFamily:"Gugi-Regular",
                fontSize: 24,
            },
            headerTitle: "잡소리",
            headerTitleAlign: 'center',
            headerRight: () => (
              <View style={{flexDirection : "row", marginRight:10}}>
                <TouchableOpacity onPress={() => alert('검색!')}>
                    <Ionic name="search" style = {{fontSize: 24, color: "black"}}/>
                </TouchableOpacity>
                <Text>  </Text>
                <TouchableOpacity onPress={() => alert('검색!')}>
                    <Entypo name="chat" style = {{fontSize: 24, color: "black"}}/>
                </TouchableOpacity>
              </View>
            )
          }}
          >
          <Drawer.Screen name="홈" component={BottomTab}/>
          <Drawer.Screen name="공지사항" component={Notice}/>
          <Drawer.Screen name="문의" component={Contact}/>
          <Drawer.Screen name="설정" component={Setting}/>
        </Drawer.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <TopTab/>
    </NavigationContainer>
    
  );
  };


export default App;
