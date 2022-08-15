import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Simple from "react-native-vector-icons/SimpleLineIcons"
import Evil from "react-native-vector-icons/EvilIcons"


const Post = ({params}) => { 

  const [data, setData] = useState([{
    id : 1,
    userName: 'Neville Brody',
    userInfo: '그래픽 디자이너',
    avatar: 'https://post-phinf.pstatic.net/MjAxNzA4MTBfNzIg/MDAxNTAyMzUxMDY5OTM4.j-1npgxwDwo7wRKxf_eKvTLD_Cr-Uxmin6iugZvDbaYg.QtJy3cEVBCvss1C5nE_i-K9pbKZitogrRWKby8HC-ZAg.JPEG/M.1501833886.7757.1.jpg?type=w1200',
    content: 'An electrician isn\'t an opinion former, but a graphic designer is. My argument is that all graphic designers hold high levels of responsibility in society. We ...',
    timeAgo:'1시간 전',
    like: '  735',
    comment: ' 16'
  }]);

  const [data2, setData2] = useState([{
    id : 2,
    userName: '강형욱',
    userInfo: '훈련사',
    avatar: 'https://www.bodeum.co.kr/data/trainerImages/1505121345_TRAINER.jpg',
    content: '제지하고 통제할 수 있는 사람이 칭찬할 수 있는 거에요. 통제할 수 없는 사람이 칭찬하게 되면 그 칭찬이 우스워져요. 그런데 통제할 수 있는 사람이 칭찬하면 감동이 돼요.',
    timeAgo:'13시간 전',
    like: '  1238',
    comment: ' 63'
  }]);

  const [data3, setData3] = useState([{
    id : 3,
    userName: 'Bong Joonho',
    userInfo: '영화감독',
    avatar: 'https://t1.daumcdn.net/cfile/blog/993231435C1A5A3207',
    content: '어렸을 때 제가 항상 가슴에 새겼던 말이 있었는데, 영화 공부를 할 때 \'가장 개인적인 것이 가장 창의적인 것이다\' 그말을 하셨던 분이 누구였나면. 책에서 읽은 거였지만 그 말은 ...',
    timeAgo:'2일 전',
    like: '  19840',
    comment: ' 527'
  }]);

  

  const _renderItem = ({item}) =>{
    return (
      <Card>
        <CardContent>
          <Header>
            <View style = {{flexDirection:'row', alignItems: 'center'}}>
              <Avatar source = {{uri:item.avatar}}/>
              <View style={{flexDirection:'column', justifyContent : 'center' }}> 
                <UserName>{item.userName}</UserName>
                <View style = {{marginLeft:12}}>
                  <UserInfo>{item.userInfo}</UserInfo>
                </View>
              </View>
            </View>
          </Header>
          <Content>
            <ContentText> {item.content} </ContentText>
          </Content>
          <Footer>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Simple name="like" style = {{fontSize: 18, color: '#B5D3DB'}}/>
              <Number>{item.like}</Number>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:24}}></View>
                <Evil name="comment" style = {{fontSize: 26, color: '#B5D3DB'}}/>
                <Number>{item.comment}</Number>
            </View>
            <Time>{item.timeAgo}</Time>
          </Footer>
        </CardContent>
      </Card>
    )
  }

  return (
  <Container>
    <FlatList keyExtractor = {(_,index) => index} data = {data} renderItem={_renderItem}/>
    <FlatList keyExtractor = {(_,index) => index} data = {data2} renderItem={_renderItem}/>
    <FlatList keyExtractor = {(_,index) => index} data = {data3} renderItem={_renderItem}/>
  </Container>

); }



const Container = styled.View`
  flex: 1;
  background-color: #f1f9ff;
`;
const Card = styled.View`
  margin: 8px;
  background-color: #fff;
  border-radius: 15px;
  `;
const CardContent = styled.View`
  color:black;
  margin: 12px; 
`;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  `;
const UserName = styled.Text`
  color: black;
  font-size: 15px;
  line-height: 24px;
  font-weight: bold;
  margin-left: 12px;
  `;
const UserInfo = styled.Text`
  color: grey;
  font-size: 12px;
  line-height: 24px;
  `;
const Time = styled.Text`
  color: #2699fb;
  font-size: 13px;
  line-height: 24px;
  `;
const Content = styled.View`
  color: black;
  margin: 16px 0px;
  height: 70px;
`;
const ContentText = styled.Text`
  font-size: 14px;
  line-height: 24px;
  `;
const Footer = styled.View`
  margin-top : 10px;
  flex-direction: row;
  justify-content: space-between;  
`;
const Number = styled.Text`
  color: #B5D3DB;
  font-size: 13px;
  line-height: 24px;
`;


export default Post;