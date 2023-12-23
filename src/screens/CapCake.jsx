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
export default function CapCake() {
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
          <View style={styles.textContainer}>
            <Text style={styles.subTitle}>{'Капкейк'.toUpperCase()}</Text>
            <Text style={styles.subTitle}>{'Пати'.toUpperCase()}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>10 мая 2024</Text>
            </View>
            <View style={styles.infoContainer}>
              <LinearGradient
                colors={['#B5FDB3', '#3DBC72']}
                style={[styles.linearSecond, {width: '100%'}]}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}>
                <Text style={styles.info}>
                  Присоединяйтесь к нашему веселому и творческому вечеру,
                  посвященному капкейкам!{' '}
                </Text>
                <Text style={styles.subInfo}>
                  Насладитесь разнообразием вкусов и возможностью украсить свой
                  собственный капкейк
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
    justifyContent: 'flex-end',
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
    color: COLORS.black,
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  subInfo: {
    color: COLORS.black,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'right',
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
    fontSize: 30,
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
  timeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    width: 80,
    position: 'absolute',
    top: Platform.OS === 'ios' ? height / 20 : height / 16,
    left: width / 2.9,
  },
  time: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    color: COLORS.black,
    fontSize: 10,
  },
});
