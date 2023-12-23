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
import Background from '../assets/backgrounds/event2.png';
import Back from '../assets/icons/back-icon.png';
import {COLORS} from '../helpers/customColor';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
export default function Desert() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <LinearGradient
        colors={['#000000', 'rgba(0, 0, 0, 0)']}
        style={styles.linear}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.2}}>
        <TouchableOpacity onPress={() => navigation.navigate('Events')}>
          <Image style={styles.back} source={Back} />
        </TouchableOpacity>

        <View style={styles.main}>
          <Text style={styles.festTitle}>
            {'Фестиваль Десертов'.toUpperCase()}
          </Text>

          <View style={styles.textContainer}>
            <Text style={styles.subTitle}>Дата: 20 июня 2024</Text>
            <View style={styles.infoContainer}>
              <LinearGradient
                colors={['#B5FDB3', '#3DBC72']}
                style={[styles.linearSecond, {width: '100%'}]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}>
                <Text style={styles.info}>Праздник для сладкоежек! </Text>
                <Text style={styles.subInfo}>
                  Откройте для себя мир десертов с нашим особым ассортиментом
                  тортов, капкейков, макарун и других сладостей.
                </Text>
              </LinearGradient>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  linear: {
    flex: 1,
    width: width,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 80,
  },
  infoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.main,
  },
  linearSecond: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.main,
  },
  info: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.black,
    fontSize: 16,
  },
  subInfo: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    color: COLORS.black,
    fontSize: 14,
    textAlign: 'center',
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
    width: '100%',
    textAlign: 'right',
  },
  festTitle: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.white,
    fontSize: 40,
    marginTop: 40,
    width: '80%',
  },
  textContainer: {
    width: '80%',
  },
});
