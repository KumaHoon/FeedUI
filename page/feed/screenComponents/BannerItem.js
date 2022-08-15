import React from 'react';
import {View, Image,Text, StyleSheet, Dimensions} from 'react-native';

const { width, height } =Dimensions.get('window');

const BannerItem = ({item}) => {
    return(
        <View style={styles.cardView}>
            <Image style = {styles.imageView} source = {{uri:item.picture}}/>
            <View style = {styles.textView}>
                <Text style = {{
                    color : item.color,
                    fontSize: 24,
                    shadowColor: '#000',
                    shadowOffset: {width:0.8, height:0.8},
                    shadowOpacity: 1,
                    shadowRadius: 3,
                    marginBottom: 5,
                    fontWeight: "bold",
                    elevation: 5
                }}> 
                {item.title} 
                </Text>
                <Text style = {{
                    color: item.color,
                    fontSize: 16,
                    shadowColor: '#000',
                    shadowOffset: {width:0.8, height:0.8},
                    shadowOpacity: 1,
                    shadowRadius: 3,
                    fontWeight: "bold",
                    elevation: 5
                }}> 
                {item.description} 
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        flex: 1,
        width : width - 20,
        height: (height / 7) * 2,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width:0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    textView:{
        position:'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    imageView:{
        width: width-20,
        height : height/3,
        borderRadius: 10,
    },
    itemTitle:{
        fontSize: 24,
        shadowColor: '#000',
        shadowOffset: {width:0.8, height:0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription:{
        fontSize: 15,
        shadowColor: '#000',
        shadowOffset: {width:0.8, height:0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        fontWeight: "bold",
        elevation: 5
    }
})


export default BannerItem;

