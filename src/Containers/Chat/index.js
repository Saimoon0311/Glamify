import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View, Image} from 'react-native';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import SafeAreaWraper from '@/Components/SafeAreaView';
import useChat from './useChat';
import {Colors, FontFamily} from '@/Theme/Variables';
import {send} from '@/Assets/Images';
import Header from './Header';

const Chat = ({navigation, route}) => {
  const {data, goBack} = useChat({navigation, route});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: Colors.pink,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 0,
            padding: 5,
          },
          right: {
            backgroundColor: Colors.black,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 20,
            padding: 5,
          },
        }}
        textStyle={{
          left: {
            color: Colors.black,
          },
          right: {
            color: Colors.white,
          },
        }}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendContainer}>
          <Text style={styles.sendText}>Send</Text>
          <Image source={send} />
        </View>
      </Send>
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendContainer}>
          <Text style={styles.sendText}>Send</Text>
          <Image source={send} />
        </View>
      </Send>
    );
  }

  // function scrollToBottomComponent() {
  //   return (
  //     <View style={styles.bottomComponentContainer}>
  //       <IconButton icon='chevron-double-down' size={36} color='#6646ee' />
  //     </View>
  //   );
  // }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.pink} />
      </View>
    );
  }

  return (
    <SafeAreaWraper>
      <Header {...{goBack, data}} />
      <GiftedChat
        messages={messages}
        alwaysShowSend
        onSend={messages => onSend(messages)}
        scrollToBottom
        user={{
          _id: 1,
        }}
        textInputProps={{
          fontSize: 14,
          color: Colors.black,
        }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        renderLoading={renderLoading}
      />
    </SafeAreaWraper>
  );
};

export default Chat;

const styles = StyleSheet.create({
  // rest remains same
  sendContainer: {
    backgroundColor: Colors.black,
    width: 90,
    height: 40,
    marginRight: 5,
    marginBottom: 1.5,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sendText: {
    fontSize: 15,
    color: Colors.white,
    fontFamily: FontFamily.regular,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
