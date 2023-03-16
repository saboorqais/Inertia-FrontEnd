import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';
import Shop from '../Shop/Shop';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import {Box} from 'native-base';
import Menu from '../Account/Menu';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarStyle: {padding: 20},
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Box mb={2}>
              <IconF name="home" size={20} color={color} />
              <IconE name="dot-single" size={20} color={color} />
            </Box>
          ),
          tabBarActiveTintColor: '#546CFF',
          tabBarInactiveTintColor: '#A0A0A0',
        }}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarStyle: {padding: 20},
          tabBarShowLabel: false,

          tabBarIcon: ({color, size}) => (
            <Box mb={2}>
              <Icon name="shopping-bag" color={color} size={20} />
              <IconE name="dot-single" size={20} color={color} />
            </Box>
          ),
          tabBarActiveTintColor: '#546CFF',
          tabBarInactiveTintColor: '#A0A0A0',
        }}
        name="Shop"
        component={Shop}
      />
      <Tab.Screen
        options={{
          tabBarStyle: {padding: 20},
          tabBarShowLabel: false,

          tabBarIcon: ({color, size}) => (
            <Box mb={2}>
              <IconI name="menu" color={color} size={20} />
              <IconE name="dot-single" size={20} color={color} />
            </Box>
          ),
          tabBarActiveTintColor: '#546CFF',
          tabBarInactiveTintColor: '#A0A0A0',
        }}
        name="Account"
        component={Menu}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
