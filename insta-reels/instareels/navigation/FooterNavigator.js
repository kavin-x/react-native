import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReelsScreen from '../screens/ReelsScreen';
import UploadScreen from '../screens/UploadScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const FooterNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,tabBarStyle:{
      backgroundColor:"black",
      borderWidth:0,
      height:40
    }}}>
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: (color, size) => {
            <Ionicons name="home-outline" color="white" size={10} />;
          },
        }}
      />
      <Tab.Screen name="Uploads" component={UploadScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default FooterNavigator;
