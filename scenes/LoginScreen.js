import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
import { ImagePicker,Camera, Permissions, Icon } from 'expo';
import * as firebase from 'firebase';
import LoginForm from "../scenes/LoginForm";
//var firebaseui = require("firebaseui");

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

export default class LoginScreen extends React.Component {
    state = { loggedIn: null };

    componentWillMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        })
    }

    //ログインしていなければログインフォームをログインしていればログアウトボタンを表示
    renderForm() {
        if (this.state.loggedIn) {
          this.props.navigation.navigate("Tab");
        } else {
          return(<LoginForm />)
        }
    }

    render() {
        return (
            <View style={{flex:1,alignItems:"center"}}>
                {this.renderForm()}
                {/*<Text>{this.state.loggedIn ? "ログイン中だよ！" : "ログインしてないよ！"}</Text>
                */}
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
    wrap: {
        padding: 10
      },
      textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
      },
      buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff'
      }
  });