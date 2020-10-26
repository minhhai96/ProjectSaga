import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/Feed';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Feed'} component={FeedScreen} />
      <Tab.Screen name={'Profile'} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
