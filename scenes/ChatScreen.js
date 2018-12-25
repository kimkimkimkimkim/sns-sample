import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Image,
} from 'react-native';
import { ImagePicker,Camera, Permissions, Icon } from 'expo';

export default class ChatScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Chat</Text>
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