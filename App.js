import { StatusBar } from 'expo-status-bar';
import React, {Component}from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Image} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  web: 'Press F5 to reload'
});

const hello = "Hello World!!";
const blink = "warning"


/**컴포넌트를 만들어서 중복사용이 가능하게 만들 수 있다. */
class MyName extends Component {
  render() {
    return (
      <View style = {{alignItems: 'center'}}>
        <Text>MyName is : {this.props.name}</Text>
      </View>
    )
  }
}

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {isShowingText: true};

    setInterval(()=>(this.setState(
      prevState => (
        { isShowingText: !prevState.isShowingText}
      )
    )), 1000); /** interval 할때마다 reload된다. */
  }
  render(){
    if (!this.state.isShowingText){
      return null;
    }
    return (
      <Text>{this.props.text} </Text>
    );
  }
}


// background-color -> backgroundColor 카멜표기
type Props = {}; /** component의 성질을 바꿔주는 파라미터들을 Props라고 함 */
export default class App extends React.Component<Props> {
  render(){

    let pic = {
      uri : "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" /**이미지를 넣을 때 이런 식으로 해야함 */
    }

    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={pic} style={{width:193, height:110}}/>
        <MyName name='kyubok'/>
        <Blink text="twinkle"/>

        <Text style={styles.red}> just red</Text>
        <Text style={styles.bigBlue}>just Big blue</Text>
        <Text style={[styles.bigBlue, styles.red]}> bigBlue, and red</Text> 
        <Text style={[styles.red, styles.bigBlue]}> Red, and bigBlue</Text> */}

        <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}}/>
        <View style={{width: 150, height: 150, backgroundColor: 'skyblue'}}/>
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>


      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1, /** 화면의 비율을 100퍼센트 사용한다, 1, 1이면 50프로씩 */
    backgroundColor: '#fff',
    alignItems: 'center', /** view 하위 구성의 정렬 */
    justifyContent: 'center', /**contents 자체가 가운데 정렬 */
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10 /**북서남동 순서로 여백 */
  },
  instructions:{
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5 /**아래 여백 */
  },
  imageStyle:{
    width: 193,
    height: 110
  },
  bigBlue:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red:{
    color:'red',
  }
});
