import React from 'react';
import { ScrollView, StyleSheet ,View,TouchableOpacity,Text,Image} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

const propTypes = {
  setHeight: PropTypes.func,
};

function EventCard() {
  return(
    <View style={{height:400,backgroundColor:"white",marginTop:2}}>
      <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
        <Image source={require("../images/imageIcon.jpg")} style={{width:35,height:35,borderRadius:17.5,marginLeft:10}}/>
        <Text style={{marginLeft:10}}>芹沢 花蓮</Text>
        <Text style={{marginLeft:10,color:"silver"}}>10秒</Text>
        <View style={{flex:1}} />
        <Image source={require("../images/icon_more.png")} 
          style={{width:15,height:15,tintColor:"silver",marginRight:10,transform:[{"rotateZ":"90deg"}]}}/>
      </View>
      <Image style={{width:400,height:260}} source={require("../images/imageEventCard.jpg")}>
      </Image>
      <View style={{flex:1.5,flexDirection:"row",alignItems:"center",marginLeft:10}}>
        <Text>今日のネイル★ {"\n"}今からCALENの撮影行ってきまーす！</Text>
      </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center",marginLeft:8}}>
        <Text style={{color:"gray",fontSize:10}}>「CALEN撮影」 けやき坂{"\n"} 11月1日 10:00 ~ 17:00</Text>
        <View style={{flex:1}}/>
        <Image source={require("../images/icon_message.png")} style={{tintColor:"silver",width:20,height:20,marginRight:10}}/>
        <Image source={require("../images/icon_heart.png")} style={{tintColor:"silver",width:20,height:20,marginRight:10}}/>
        <Image source={require("../images/icon_clip.png")} style={{tintColor:"silver",width:20,height:20,marginRight:10}}/>
      </View>
    </View>

  );
}

class MyTimeline extends React.Component {

    setHeight = (e) => {
      //this.props.setHeight();
      console.log("投稿高さ:" + e.nativeEvent.layout.height);
    }

    render(){
      return(
        <View onLayout={this.setHeight}　style={{flex:1}}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </View>
      );
    }
  }

 
  
  class MyPhoto extends React.Component {
/*
    constructor(props) {
      super(props);
      this.state = {
      };
    }*/

    setHeight = (e) => {
      //this.props.setHeight();
      console.log("写真高さ:" + e.nativeEvent.layout.height);
    }

    render(){
      return(
        <ScrollView  onLayout={this.setHeight} style={{flexDirection:"column",flexWrap:"wrap"}} bounces={false} scrollEnabled={false}>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_01.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_03.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_06.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_02.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_03.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_07.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_04.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_05.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_09.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_03.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_01.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_08.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_02.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_06.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_08.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_02.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_06.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_08.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_02.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_06.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_08.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_02.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_06.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_08.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_02.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_06.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_08.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
            <View style={{height:120,flexDirection:"row",justifyContent:"space-around"}}>
             <Image source={require("../images/osyare_02.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_06.jpg")} style={{width:120,height:120,margin:0.5}}/>
             <Image source={require("../images/osyare_08.jpg")} style={{width:120,height:120,margin:0.5}}/>
            </View>
        </ScrollView>
      );
    }
  }

  MyPhoto.propTypes = propTypes;
  
  class MyLog extends React.Component {
    render(){
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Log</Text>
        </View>
      );
    }
  }
  
  class MyFriend extends React.Component {
    render(){
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Friend</Text>
        </View>

      );
    }
  }

  export default createMaterialTopTabNavigator({
    Timeline:{
        screen:MyTimeline,
        navigationOptions:{
            title:"投稿一覧",
        },
    },
    Photo:{
        screen:MyPhoto,
        navigationOptions:{
            title:"写真",
        },
    },
    Log:{
        screen:MyLog,
        navigationOptions:{
            title:"ログ",
        },
    },
    Friend:{
        screen:MyFriend,
        navigationOptions:{
            title:"フレンド",
        },
    },
  },{
      swipeEnabled:false,
      tabBarOptions:{
        activeTintColor: '#1DA1F2',
        inactiveTintColor: '#9B9B9B',
        style:{
         backgroundColor:"white",
        },
        indicatorStyle:{
         backgroundColor:"#1DA1F2",
        },
      },
  });