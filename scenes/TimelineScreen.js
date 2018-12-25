import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Image,
    FlatList
} from 'react-native';
import { ImagePicker,Camera, Permissions, Icon, } from 'expo';
import * as firebase from 'firebase';

import EventCard from "../scenes/EventCard";


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

export default class TimelineScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            comment:"",
        };
        //this.handlePostUpdate = this.handlePostUpdate.bind(this);
    }

    componentDidMount() {
        firebase.database().ref("eventcards/").on("value",this.handlePostUpdate);
    }

    handlePostUpdate = (snapshot) => {
        var json = snapshot.toJSON();
        var jsonstring = JSON.stringify(json);
        var jsonobj = JSON.parse(jsonstring);
        this.setState({
            data:Object.values(snapshot.toJSON()).reverse(),
        });
    }


    render() {
        //console.log(this.state.data);

        return (
            <View style={styles.container}>
                <FlatList 
                    style={{flex:1,width:"100%"}}
                    data={this.state.data}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={({item}) => (
                        <EventCard data={item}/>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });