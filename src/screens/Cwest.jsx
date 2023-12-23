import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../assets/backgrounds/event5.png';
import Back from '../assets/icons/back-icon.png';
import {COLORS} from '../helpers/customColor';
import Title from '../assets/icons/cwest-title.png';
import Info from '../assets/icons/cwest-info.png';

const {height, width} = Dimensions.get('window');
export default function Cwest() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Image style={styles.back} source={Back} />
      </TouchableOpacity>

      <Image source={Title} style={styles.sportTitle} />

      <Image source={Info} style={styles.cwestInfo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
  },
  back: {
    width: 50,
    height: 35,
    aspectRatio: 3,
    resizeMode: 'contain',
  },
  main: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 80,
  },
  infoContainer: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  info: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.black,
    fontSize: 20,
  },
  title: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.white,
    fontSize: 16,
    width: '70%',
    textAlign: 'right',
    paddingRight: 10,
  },
  subTitle: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.white,
    fontSize: 13,
    width: '70%',
    textAlign: 'right',
    paddingRight: 10,
  },
  sportTitle: {
    width: width,
    height: 110,
    aspectRatio: Platform.OS === 'ios' ? 3 : 2.8,
    resizeMode: 'contain',
    marginLeft: 35,
  },
  timeContainer: {
    width: '45%',
    marginLeft: 35,
    marginTop: 8,
    backgroundColor: COLORS.white,
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 25,
  },
  time: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.black,
    fontSize: 12,
    textAlign: 'center',
  },
  cwestInfo: {
    width: width,
    height: 120,
    aspectRatio: Platform.OS === 'ios' ? 3 : 2.8,
    resizeMode: 'contain',
    marginLeft: 15,
    marginTop: -20,
  },
});
