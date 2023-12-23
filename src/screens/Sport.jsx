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
import Background from '../assets/backgrounds/event-4.png';
import Back from '../assets/icons/back-icon.png';
import {COLORS} from '../helpers/customColor';
import SportTitle from '../assets/icons/sport-title.png';

const {height, width} = Dimensions.get('window');
export default function Sport() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Image style={styles.back} source={Back} />
      </TouchableOpacity>

      <View style={styles.line} />

      <Image source={SportTitle} style={styles.sportTitle} />

      <View style={styles.line} />

      <View style={styles.timeContainer}>
        <Text style={styles.time}>Дата: 22 октября 2024</Text>
      </View>
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
    width: width / 1.5,
    height: 80,
    aspectRatio: 3,
    resizeMode: 'contain',
    marginLeft: 35,
  },
  timeContainer: {
    width: '45%',
    marginLeft: 35,
    marginTop: 4,
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
  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: COLORS.main,
    marginTop: 2,
  },
});
