/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Login from './src/components/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Greet from './src/components/WelcomeScreen/Greet';
import Tabs from './src/components/Tabs/Tabs';
import Header from './src/components/Header/Header';
import {customTheme} from './src/Utils/Color/colorTheme';
import Product from './src/components/Product/Product';
import ProductPage from './src/components/ProductPage/ProductPage';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';
import Cart from './src/components/Cart/Cart';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider
    store={store}
    >

  
    <NavigationContainer>
      <NativeBaseProvider theme={customTheme}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Welcome"
            component={Greet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerTitle: (props: any) => <Header {...props} />}}
          />
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{
              headerShown: false,
              headerTitle: (props: any) => <Header {...props} />,
            }}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={({route}:any) => ({
              title: route.params.title,
            })}
          />
          <Stack.Screen
            name="ProductPage"
            component={ProductPage}
            options={({route}:any) => ({
              title: route.params.title,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({route}:any) => ({
              title: route.params.title,
            })}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
