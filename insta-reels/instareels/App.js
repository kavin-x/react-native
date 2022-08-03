import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import FooterNavigator from './navigation/FooterNavigator';

const App = () => {
 
  return (
    
    <NavigationContainer >
      <FooterNavigator/>
    </NavigationContainer>
  );
};

export default App;
