import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { ImagePicker,Camera, Permissions, Icon } from 'expo';
import * as firebase from 'firebase';
import Config from "../scenes/ConfigScreen";

const firebaseConfig = {
    apiKey: "AIzaSyAq54W3nrVyUoG8CLP0GkGKeO7IeaK-eYQ",
    authDomain: "sns-sample-15bc8.firebaseapp.com",
    databaseURL: "https://sns-sample-15bc8.firebaseio.com",
    storageBucket: "sns-sample-15bc8.appspot.com",
    messagingSenderId: "197706438319"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default class SettingScreen extends React.Component {
    state = { 
        name:firebase.auth().currentUser.displayName,
        photoURL:"",
        email: firebase.auth().currentUser.email, 
        password:  "", 
        error: '', 
    };

    _signOut(){
        firebase.auth().signOut();
        this.props.navigation.navigate("Login");
    }

    render() {

        return (
            /*
            <View style={styles.container}>
                <View style={{flex:1,flexDirection:"row"}}>
                    <Image source={require("../images/icon_user.jpeg")} 
                        style={{height:80,width:80,alignItems:"center",justifyContent:"center"}}>
                    </Image>
                    <View style={{height:500,flex:1}}>
                        <Text>名前</Text>
                        <TextInput
                            placeholder="名前"
                            autoCorrect={false}
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                            style={styles.inputStyle}
                        />
                        <Text>メールアドレス</Text>
                        <TextInput
                            placeholder="メールアドレス"
                            autoCorrect={false}
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            style={styles.inputStyle}
                        />
                        <Text>パスワード</Text>
                        <TextInput
                            placeholder="パスワード"
                            autoCorrect={false}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            style={styles.inputStyle}
                        />
                        <TouchableOpacity onPress={this._signOut.bind(this)} 
                            style={[styles.buttonStyle,{borderColor:"#007aff",backgroundColor:"#007aff",width:100}]}>
                            <Text style={{color:"white"}}>保存</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={this._signOut.bind(this)} style={styles.buttonStyle}>
                    <Text style={{color:"red"}}>ログアウト</Text>
                </TouchableOpacity>
            </View>
            */
           <ScrollView style={{flex:1,backgroundColor:"whitesmoke"}}>
                <View style={[styles.cell,{borderTopColor:"white"}]}>
                    <Image 
                        source={require("../images/icon_user.jpeg")}
                        style={{width:40,height:40,borderRadius:20}}
                    />
                    <TouchableOpacity style={{marginLeft:10}}>
                        <Text 
                            style={{color:"#007aff"}}
                        >プロフィール写真を変更
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.space}/>
                <View style={styles.cell}>
                    <Image 
                        source={require("../images/imageEventCard.jpg")}
                        style={{width:40,height:40,borderRadius:10}}
                    />
                    <TouchableOpacity style={{marginLeft:10}}>
                        <Text 
                            style={{color:"#007aff"}}
                        >カバー写真を変更
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.space}/>
                <View style={styles.cell}>
                    <Text>
                        表示名
                    </Text>
                    <View style={{flex:1}}/>
                    <Text style={{marginRight:10,color:"gray"}}>
                        {this.state.name}
                    </Text>
                    <Image
                        source={require("../images/arrowright.png")}
                        style={{width:15,height:15,tintColor:"lightgray",marginRight:15}}
                    />
                </View>
                <View style={styles.space}/>
                <View style={[styles.cell,{borderBottomColor:"white"}]}>
                    <Text>
                        メールアドレス
                    </Text>
                    <View style={{flex:1}}/>
                    <Text style={{marginRight:10,color:"gray"}}>
                        {this.state.email}
                    </Text>
                    <Image
                        source={require("../images/arrowright.png")}
                        style={{width:15,height:15,tintColor:"lightgray",marginRight:15}}
                    />
                </View>
                <View style={[styles.cell,{borderBottomColor:"white"}]}>
                    <Text>
                        場所
                    </Text>
                    <View style={{flex:1}}/>
                    <Text style={{marginRight:10,color:"gray"}}>
                        位置情報を追加
                    </Text>
                    <Image
                        source={require("../images/arrowright.png")}
                        style={{width:15,height:15,tintColor:"lightgray",marginRight:15}}
                    />
                </View>
                <View style={[styles.cell,{borderBottomColor:"white"}]}>
                    <Text>
                        Web
                    </Text>
                    <View style={{flex:1}}/>
                    <Text style={{marginRight:10,color:"gray"}}>
                        Webサイトを追加
                    </Text>
                    <Image
                        source={require("../images/arrowright.png")}
                        style={{width:15,height:15,tintColor:"lightgray",marginRight:15}}
                    />
                </View>
                <View style={[styles.cell,{borderBottomColor:"white"}]}>
                    <Text>
                        生年月日
                    </Text>
                    <View style={{flex:1}}/>
                    <Text style={{marginRight:10,color:"gray"}}>
                        生年月日を追加
                    </Text>
                    <Image
                        source={require("../images/arrowright.png")}
                        style={{width:15,height:15,tintColor:"lightgray",marginRight:15}}
                    />
                </View>
                <View style={styles.cell}>
                    <Text>
                        パスワード
                    </Text>
                    <View style={{flex:1}}/>
                    <Text style={{marginRight:10,color:"gray"}}>
                        {this.state.name}
                    </Text>
                    <Image
                        source={require("../images/arrowright.png")}
                        style={{width:15,height:15,tintColor:"lightgray",marginRight:15}}
                    />
                </View>
           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cell:{
        flexDirection:"row",
        backgroundColor:"white",
        height:50,
        alignItems:"center",
        borderTopColor:"lightgray",
        borderBottomColor:"lightgray",
        borderTopWidth:0.5,
        borderBottomWidth:0.5,
        paddingLeft:15
    }, 
    space:{
        height:30
    },  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding:20,
    },
    buttonStyle:{
        height:35,
        borderRadius:5,
        borderColor:"red",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        width:200
    },
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        marginTop:5,
        marginBottom:5,
        fontSize: 18,
        lineHeight: 23,
        height: 30,
        borderRadius:5,
        width:200,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom:20,
    },
  });