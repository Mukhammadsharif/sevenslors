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
import Background from '../assets/backgrounds/event1.png';
import Back from '../assets/icons/back-icon.png';
import {COLORS} from '../helpers/customColor';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');
export default function Cake() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Events')}>
        <Image style={styles.back} source={Back} />
      </TouchableOpacity>

      <View style={styles.main}>
        <View style={styles.infoContainer}>
          <LinearGradient
            colors={['#B5FDB3', '#3DBC72']}
            style={[styles.infoContainer, {width: '100%'}]}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Text style={styles.info}>ДЕНЬ ТОРТА</Text>
          </LinearGradient>
        </View>

        <Text style={styles.title}>Праздник для любителей тортов!</Text>

        <Text style={styles.subTitle}>Дата: 15 июня 2024</Text>
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
});
