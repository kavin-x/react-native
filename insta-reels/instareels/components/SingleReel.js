import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  Button,
  Pressable,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import Ionic from 'react-native-vector-icons/FontAwesome5';

const SingleReel = ({item, index, currentIndex}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const videoRef = useRef(null);

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  };
  const onError = error => {
    console.log('error', error);
  };

  const [mute, setMute] = useState(false);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight-,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setMute(!mute)}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Video
          videoRef={videoRef}
          onBuffer={onBuffer}
          onError={onError}
          repeat={true}
          resizeMode="cover"
          paused={currentIndex == index ? false : true}
          source={{
            uri: item.videoUrl,
          }}
          muted={mute}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        />
      </TouchableOpacity>
      <Ionic
        name="volume-mute"
        style={{
          fontSize: mute ? 20 : 0,
          color: 'white',
          position: 'absolute',
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 60,
          left: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              marginRight: 15,
              borderWidth: 1,
              borderColor: 'red',
            }}
            source={{
              uri: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=916',
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 13,

              color: 'white',
            }}>
            {item.userName}
          </Text>
          <Pressable
            style={{
              backgroundColor: 'rgba(52,52,52,0)',
              borderWidth: 1,
              borderColor: 'white',
              marginLeft: 10,
              width: 80,
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Text style={{color: 'white', padding: 5}}>Follow</Text>
          </Pressable>
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 13, color: 'white'}}>
          {item.caption}
        </Text>
      </View>
    </View>
  );
};

export default SingleReel;
