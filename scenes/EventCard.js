import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Image,
} from 'react-native';
import { ImagePicker,Camera, Permissions, Icon } from 'expo';

/*
props={
    data:[
        (icon)
        username:string,
        posttime:string,
        downloadURL:string
        comment:string
    ]
}   
*/

/*
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
*/

export default class EventCard extends React.Component {
    
    render() {

        var usericon = "../images/imageIcon.jpg";
        var username = this.props.data.username;
        var posttime = this.props.data.posttime;
        var comment = this.props.data.comment;
        var downloadURL = this.props.data.downloadURL;
        var place = "defaultplace";

        return (
            
            <View style={{height:400,backgroundColor:"white",marginTop:2,width:"100%"}}>
                <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                    <Image source={require(usericon)} style={{width:35,height:35,borderRadius:17.5,marginLeft:10}}/>
                    <Text style={{marginLeft:10}}>{username}</Text>
                    <Text style={{marginLeft:10,color:"silver"}}>{posttime}</Text>
                    <View style={{flex:1}} />
                    <Image source={require("../images/icon_more.png")} 
                    style={{width:15,height:15,tintColor:"silver",marginRight:10,transform:[{"rotateZ":"90deg"}]}}/>
                </View>
                <Image style={{width:400,height:260}} source={{uri:downloadURL}}>
                </Image>
                <View style={{flex:1.5,flexDirection:"row",alignItems:"center",marginLeft:10}}>
                    <Text>{comment}</Text>
                </View>
                <View style={{flex:1,flexDirection:"row",alignItems:"center",marginLeft:8}}>
                    <Text style={{color:"gray",fontSize:10,marginLeft:2}}>{place}</Text>
                    <View style={{flex:1}}/>
                    <Image source={require("../images/icon_message.png")} style={{tintColor:"silver",width:20,height:20,marginRight:10}}/>
                    <Image source={require("../images/icon_heart.png")} style={{tintColor:"silver",width:20,height:20,marginRight:10}}/>
                    <Image source={require("../images/icon_clip.png")} style={{tintColor:"silver",width:20,height:20,marginRight:10}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });