
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './page/feed/screens/Home';
import Search from './page/feed/screens/Search';
import Book from './page/feed/screens/Book';
import Profile from './page/feed/screens/Profile';
import Contents from './page/feed/screens/Contents';
import Ionic from "react-native-vector-icons/Ionicons";

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
            colour = "black";
            if(route.name === "Home"){
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size+8 : size+2;
            }
            // else if (route.name === "Search"){
            //   iconName = focused ? "search" : "ios-search-outline";
            // }
            else if (route.name === "Contents"){
              iconName = focused ? "md-film" : "md-film-outline";
            }
            else if (route.name === "Dictionary"){
              iconName = focused ? "ios-book" : "ios-book-outline";
            }
            else if (route.name === "Profile"){
              iconName = focused ? "ios-person-circle" : "ios-person-outline";
            }

            return <Ionic name = {iconName} size = {size} color = {colour}/>

          }

        })}>
          <Tab.Screen name="Home" component = {Home}/>
          <Tab.Screen name="Contents" component = {Contents}/>
          <Tab.Screen name="Dictionary" component = {Book}/>
          <Tab.Screen name="Profile" component = {Profile}/>
          
      </Tab.Navigator>
    )
  }


  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}>
        <Stack.Screen name = "Bottom" component={BottomeTabScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  };


export default App;
