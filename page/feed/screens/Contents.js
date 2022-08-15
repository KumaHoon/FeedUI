import React from 'react';
import { View, Text, Dimensions} from 'react-native';
import Banner from "../screenComponents/Banner.js"
import {Data, Data2} from "../screenComponents/BannerData.js"
import Toptab from "../screenComponents/Toptab";

const { width, height } = Dimensions.get('window');

const Contents = ({navigation}) => {
  return(
    <View style={{backgroundColor: '#f1f9ff', height:'100%'}}>
            <Toptab name = "컨텐츠"/>
            <View >
              <View style={{flexDirection:'column', justifyContent : 'center' }}> 
                <Text style = {{
                  color: "black", 
                  fontSize: 21, 
                  marginLeft:13, 
                  marginTop:10, 
                  fontWeight:"bold"
                }}> 추천
                </Text>
                <Text style = {{
                  color: "grey", 
                  fontSize: 14, 
                  marginLeft:13, 
                }}> 신규 컨텐츠 추천
                </Text>
              </View>
              <Banner data = {Data}/>
            </View>
            <View>
            <View style={{flexDirection:'column', justifyContent : 'center' }}> 
                <Text style = {{
                  color: "black", 
                  fontSize: 21, 
                  marginLeft:13, 
                  marginTop:10, 
                  fontWeight:"bold"
                }}> 탐색
                </Text>
                <Text style = {{
                  color: "grey", 
                  fontSize: 14, 
                  marginLeft:13, 
                }}> 현직자에게 듣는 직업의 세계
                </Text>
              </View>
              <Text style = {{textAlign: 'right', fontSize: 12, marginRight: 8}}>
              탐색 더보기 > 
              </Text>
              <Banner data = {Data2}/>
            </View>
    </View>
  )
}


export default Contents;