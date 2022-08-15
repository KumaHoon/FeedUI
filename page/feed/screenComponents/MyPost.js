import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Simple from "react-native-vector-icons/SimpleLineIcons"
import Evil from "react-native-vector-icons/EvilIcons"


const MyPost = ({params}) => { 

  const [data, setData] = useState([{
    id : 1,
    userName: '주먹펴고일어서',
    userInfo: '한양고등학교',
    avatar: 'https://post-phinf.pstatic.net/MjAxNzA4MTBfNzIg/MDAxNTAyMzUxMDY5OTM4.j-1npgxwDwo7wRKxf_eKvTLD_Cr-Uxmin6iugZvDbaYg.QtJy3cEVBCvss1C5nE_i-K9pbKZitogrRWKby8HC-ZAg.JPEG/M.1501833886.7757.1.jpg?type=w1200',
    content: '첫 글 입니다...!',
    timeAgo:'1시간 전',
    like: '  1',
    comment: ' 0'
  }]);
  

  const _renderItem = ({item}) =>{
    return (
      <Card>
        <CardContent>
          <Header>
            <View style = {{flexDirection:'row', alignItems: 'center'}}>
              <Avatar source = {require('../storage/icons/user.jpg')}/>
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


export default MyPost;