import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ChatBot from 'react-native-chatbot';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];

export class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ChatBot steps={steps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});

export default Chat;
