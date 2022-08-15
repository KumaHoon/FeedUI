import React, {useState} from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Evil from "react-native-vector-icons/EvilIcons"

const { width, height } = Dimensions.get('window');

const Post = ({params}) => { 

  const [data, setData] = useState([{
    id : 1,
    userName: '하냥이',
    userInfo: '한양고등학교 학생',
    avatar: 'https://icon-library.com/images/generic-user-icon/generic-user-icon-13.jpg',
    content: '인공지능 쪽에 관심이 많은 고1 학생입니다. 다들 이 분야에 대해서 준비할때 코딩은 필수라고 하던데 정말 그런가요?',
    timeAgo:'5분 전',
    comment: ' 16',
    tag: '#AI #인공지능'
  }]);

  const [data2, setData2] = useState([{
    id : 2,
    userName: '리오넬 메시',
    userInfo: '한양중학교 학생',
    avatar: 'https://histimes.com/wp-content/uploads/2022/07/NINTCHDBPICT000749515776-1-780x470.jpg',
    content: '제가 게임 개발하는게 꿈인데 중학생때 해보면 좋을게 무엇이 있을까요?',
    timeAgo:'4시간 전',
    comment: ' 63',
    tag: '#게임개발 #게임'
  }]);

  const [data3, setData3] = useState([{
    id : 3,
    userName: '신짱구',
    userInfo: '액션고등학교 학생',
    avatar: 'https://i1.sndcdn.com/artworks-Z5SLEGyINrvdjrkz-CQbgFA-t500x500.jpg',
    content: '다들 부모님이 진로에 대해 반대하실 때 어떻게 하셨나요? 어떻게 설득해야할까요??',
    timeAgo:'17시간 전',
    like: '  19840',
    comment: ' 527',
    tag: '#일반'
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
            <TagText>{item.tag}</TagText>
          </Content>
          <Footer>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center', marginLeft:5}}></View>
                <Evil name="comment" style = {{fontSize: 26, color: '#B5D3DB'}}/>
                <Text style = {{fontSize:14, color: '#B5D3DB'}}> 답변하기 </Text>
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
  border-radius: 50px;
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
  color:black;
  font-size: 14px;
  line-height: 24px;
  `;
const TagText = styled.Text`
  color: grey;
  font-size: 14px;
  line-height: 24px;
`;
const Footer = styled.View`
  margin-top : 10px;
  flex-direction: row;
  justify-content: space-between;  
`;


export default Post;