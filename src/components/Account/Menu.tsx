import {Avatar, Heading, VStack, Text} from 'native-base';
import * as React from 'react';
import {View} from 'react-native';
import MenuList from './MenuList/MenuList';

type Props = {};

export default function Menu({}: Props) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white',width:"100%"}}>
      <VStack
        mt={10}
        space={2}
        alignItems={{
          base: 'center',
          md: 'flex-start',
        }}>
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="2xl"
          source={{
            uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
          }}>
          RB
        </Avatar>
        <Heading color={'#1D1D1D'}>Kenny Deguzman</Heading>
      </VStack>
      <MenuList/>
    </View>
  );
}
