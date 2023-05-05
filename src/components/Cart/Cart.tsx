import { View } from "react-native";
import React from "react";
import { HStack, Heading, VStack, Text } from "native-base";
import { WebView } from "react-native-webview";

const Cart = () => {
  const onMessageReceived = (event) => {
    const message = event.nativeEvent.data;
    console.log(message);
    // Handle the message from Unity here
  };

  return (
    <WebView
      source={{ uri: 'file:///android_asset/test.html' }}
      onMessage={onMessageReceived}
      allowFileAccess={true}
      allowFileAccessFromFileURLs={true}
    />

  );
};

export default Cart;
