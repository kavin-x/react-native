import { View, Text ,Dimensions,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { PlatformConstants } from 'react-native';
import ReelsComponent from '../components/ReelsComponent';

const ReelsScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  console.log(windowWidth,windowHeight,"www")
  const [mute, setmute] = useState(true);
  return (
    <View onLayout={(event)=>{
      var {x,y,width,height}=event.nativeEvent.layout
      console.log(width,height);
    }}
      style={{
        width: windowWidth,
        height: 684,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
        
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setmute(!mute);
          console.log(mute);
          
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <ReelsComponent/>
      </TouchableOpacity>
    </View>
  )
}

export default ReelsScreen