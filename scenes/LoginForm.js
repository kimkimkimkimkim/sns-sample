import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator,Alert,Platform,Image } from 'react-native';
import firebase from 'firebase';
 
class LoginForm extends Component {
  state = { name:"", email: '', password: '', error: '', loading: false, isLogin: true};
 
  onButtonPress() {
    const {email, password } = this.state;
    this.setState({error: '', loading: true});
    
    if(this.state.isLogin){
        //ログイン
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((this.onLoginSuccess.bind(this)))
        .catch(() => {
            
            this.onLoginFail();
            
            /*
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((this.onLoginSuccess.bind(this)))
            .catch((this.onLoginFail.bind(this)));
            */
        });
    }else{
        //新規登録
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((this.onLoginSuccess.bind(this)))
        .catch(() => {
            //ログイン
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((this.onLoginSuccess.bind(this)))
            .catch((this.onLoginFail.bind(this)));
        });
    }
  }
 
  onLoginSuccess() {
    //内容更新
    if(!this.state.isLogin){
      firebase.auth().currentUser.updateProfile({
        displayName:this.state.name
      });
    }
    this.setState({
      name:"",
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }
 
  onLoginFail() {
    if(this.state.isLogin){
      alert("メールアドレスまたはパスワードが正しくありません。");
    }else{
      alert("すでに使用されているメールアドレスです。")
    }
    this.setState({
      loading: false,
      error: 'Authentication Failed'
    });
  }

  switchIsLogin(){
      this.setState({
        isLogin:!this.state.isLogin
      });
  }
 
  loadSpinner() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />
    }
 
    return (
      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
        {this.upperText()}
      </TouchableOpacity>
      
    )
  }

  upperText(){
        if(!this.state.isLogin){
            return(
            <Text style={[styles.textStyle]}>
            新規登録
            </Text>
            )
        }else{
            return(
            <Text style={[styles.textStyle]}>
            ログイン
            </Text>
            )
        }
    }

  lowerText(){
      if(this.state.isLogin){
          return(
            <Text style={[styles.textStyle,{color:"#007aff"}]}>
            新規登録
           </Text>
          )
      }else{
          return(
            <Text style={[styles.textStyle,{color:"#007aff"}]}>
            ログイン
        </Text>
          )
      }
  }

  renderUserNameTextInput(){
    if(!this.state.isLogin){
      return(
        <View>
        <Text style={styles.inputTitle}>ユーザー名</Text>
        <TextInput
            placeholder="ユーザー名"
            autoCorrect={false}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            style={styles.inputStyle}
        />
        </View>
      )
    }
  }
 
  render() {
    return (
      <View style={{marginTop:60,}}>
        <Image 
            source={require("../images/logo.png")}
            style={{height:250,width:250,alignSelf:"center"}}
        />
        {this.renderUserNameTextInput()}
        <Text style={styles.inputTitle}>メールアドレス</Text>
        <TextInput
            placeholder="メールアドレス"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.inputStyle}
        />
        <Text style={styles.inputTitle}>パスワード</Text>
        <TextInput
            secureTextEntry
            placeholder="パスワード"
            autoCorrect={false}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.inputStyle}
        />
        {this.loadSpinner()}
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
            <View style={styles.border}/>
            <Text style={styles.borderText}>または</Text>
            <View style={styles.border}/>
        </View>
        <TouchableOpacity onPress={this.switchIsLogin.bind(this)} 
            style={[styles.buttonStyle,{backgroundColor:"white",borderColor:"white"}]}>
            {this.lowerText()}
        </TouchableOpacity>

      </View>
    )
  }
}
 
const styles = {
  wrap: {
    padding: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
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
    borderColor: '#007aff',
    marginTop:15,
    backgroundColor:"#007aff"
  },
  inputStyle: {
    alignSelf:"center",
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    marginTop:5,
    marginBottom:5,
    fontSize: 18,
    lineHeight: 23,
    height: 35,
    borderRadius:5,
    width:300,
    borderWidth: 1,
    borderColor: 'gray'
  },
  inputTitle:{
    color:"gray",
    marginTop:10,
  },
  border:{
    height:10,
    borderBottomWidth:1,
    borderBottomColor:"#DDD",
    width:100,
  },
  borderText:{
      marginTop:5,
      marginRight:10,
      marginLeft:10,
      color:"#777"
  }
}
 
export default LoginForm;