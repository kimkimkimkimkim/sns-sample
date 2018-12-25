import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Image,
    Alert,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import * as firebase from 'firebase';
import uuid from "uuid";
import { ImagePicker,Camera, Permissions, Icon } from 'expo';

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

export default class PostScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image:null,
            hasCameraPermission: null, // カメラ機能の許可
            type: Camera.Constants.Type.back, // 背面カメラを利用
            inputValue : "", //textinputのテキスト
            name:"芹沢 花蓮",
        };
        this.postPhoto = this.postPhoto.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return{
            headerRight: (
                <TouchableOpacity
                    style={{width:60,height:30,backgroundColor:"#1E90FF",borderRadius:15
                        ,marginRight:5,alignItems:"center",justifyContent:"center"}}
                        onPress={navigation.getParam("post")}
                >
                    <Text style={{color:"white"}}>送信</Text>
                </TouchableOpacity>
            ),
        };
    };

    componentDidMount() {
        this.props.navigation.setParams({ post: this.postPhoto });
    }

    
    async componentWillMount() {
        // カメラロールに対するPermissionを許可
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL,Permissions.CAMERA);
        this.setState({ hasCameraRollPermission: status === 'granted' });
    }

    //テキストが入力されたときの処理
    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };
    
    // カメラを起動
    _takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: false
        });
 
        console.log(result);
 
        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
    }

    // カメラロールから選択
    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [16, 9]
        });
 
        console.log(result);
 
        if (!result.cancelled) {
            this.setState({image: result.uri});
        }
    }

    //画像をアップロードする
    postPhoto(){
        console.log("postPhoto");
        this.uploadImageAsync();
    }

    //キーボードを隠す
    _hideKeyBord(){
        console.log("keybord");
        Keyboard.dismiss();
    }

    //stateを初期化
    _resetState(){
        this.setState({
            image:null,
            inputValue : "", //textinputのテキスト
        });
    }

    uploadImageAsync = async () => {
        var uri = this.state.image;
        var comment = this.state.inputValue;
        var username = this.state.name;

        var hiduke = new Date();
        var year = hiduke.getFullYear();
        var month = hiduke.getMonth()+1;
        var day = hiduke.getDate();
        var hour = hiduke.getHours();
        var minute = hiduke.getMinutes();
        var second = hiduke.getSeconds();
        var posttime = year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second;
        
        console.log("uri:" + uri);
        if(uri == null){
            alert("画像がありません");
            return;
        }
        // Why are we using XMLHttpRequest? See:
        // https://github.com/expo/expo/issues/2402#issuecomment-443726662
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
            resolve(xhr.response);
            };
            xhr.onerror = function(e) {
            console.log(e);
            reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });

        const ref = firebase
            .storage()
            .ref()
            .child("images/")
            .child(uuid.v4());
        const snapshot = await ref.put(blob);

        // We're done with the blob, close and release it
        blob.close();

        /*
        Alert.alert(
            'アップロード完了',
            "アップロードが完了いたしました。",
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        */
        //alert("アップロードが完了しました");
        this.props.navigation.navigate({routeName:"TimelineStack"}); //画面をタイムラインに移動
        this._resetState(); //Stateを初期化


        return await snapshot.ref.getDownloadURL().then(downloadURL => {
            firebase.database().ref("eventcards/" + new Date().getTime()).set({
                username:username,
                downloadURL:downloadURL,
                comment:comment,
                posttime:posttime,
            });
        });  
    }

    render() {
        let { image } = this.state;

        return (
            <View style={styles.container}>
                {/*上 */}
                <View style={{flex:1,flexDirection:"row",marginTop:10,borderBottomWidth:1,borderBottomColor:"#EEEEEE"}}>
                    <Image 
                        source={require("../images/imageIcon.jpg")} 
                        style={{width:35,height:35,borderRadius:17.5,marginLeft:10}}
                    />
                    <View style={{flex:1}}>
                        <TextInput
                            multiline = {true}
                            value={this.state.inputValue}
                            onChangeText={this._handleTextChange}
                            placeholder = {"いま何してる？"}
                            style={{ flex:1, marginLeft:5}}
                            autoFocus = {true}
                        />
                        {
                            image &&
                            <Image
                                source={{uri:image}}
                                style={{flex:1,padding:5,borderRadius:15,marginRight:15,marginBottom:10}}
                            />
                        }
                    </View>
                </View>
                <View style={{height:294}}>
                    <View style={{height:45,flexDirection:"row",borderBottomWidth:1,borderBottomColor:"#EEEEEE",alignItems:"center"}}>
                        <TouchableOpacity 
                            onPress={this._takePhoto}
                        >
                            <Image 
                                style={{width:25,height:25,marginTop:0,marginLeft:15,tintColor:"#1E90FF"}}
                                source={require("../images/icon_camera.png")}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={this._pickImage}
                        >
                            <Image 
                                style={{width:22,height:22,marginTop:2,marginLeft:25,tintColor:"#1E90FF"}}
                                source={require("../images/icon_picture.png")}
                            />
                        </TouchableOpacity>
                        <View style={{flex:1}}/>
                        <TouchableOpacity 
                            onPress={this._hideKeyBord}
                        >
                            <Image 
                                style={{width:22,height:22,marginTop:2,marginLeft:25,marginRight:25,tintColor:"#1E90FF"}}
                                source={require("../images/arrowdown.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });