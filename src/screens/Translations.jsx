import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Burger from '../assets/icons/header-burger.png';
import Logo from '../assets/icons/header-logo.png';
import Cart from '../assets/icons/header-cart.png';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function Translations() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>

        <Image source={Logo} style={styles.logo} />

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={Cart} style={styles.parcel} />
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.card}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>NBA</Text>
            </View>

            <Text style={styles.time}>13.06 - 00:50</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Atlanta Hawks</Text>
            <Text style={styles.text}>Detroit Pistons</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>NHL</Text>
            </View>

            <Text style={styles.time}>13.06 - 00:50</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Calgary Flames</Text>
            <Text style={styles.text}>Dallas Stars</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>MLB</Text>
            </View>

            <Text style={styles.time}>13.06 - 00:50</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Miami Marlins</Text>
            <Text style={styles.text}>Cincinnati Reds</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>NFL</Text>
            </View>

            <Text style={styles.time}>13.06 - 00:50</Text>
          </View>

          <View style={styles.texts}>
            <Text style={styles.text}>Baltimore Ravens</Text>
            <Text style={styles.text}>Houston Texans</Text>
          </View>
        </View>
      </View>

      <CustomButton
        text={'НА ГЛАВНУЮ'.toUpperCase()}
        onPress={() => navigation.navigate('Main')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 200,
    height: 40,
    aspectRatio: 5,
    resizeMode: 'contain',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.logoBackgroundColor,
  },
  burger: {
    width: 30,
    height: 25,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  parcel: {
    width: 28,
    height: 30,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  main: {
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  titleContainer: {
    borderRadius: 6,
    borderColor: COLORS.main,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    width: 100,
  },
  title: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    fontSize: 40,
    color: COLORS.black,
  },
  card: {
    flexDirection: 'row',
    marginTop: 15,
  },
  time: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    fontSize: 11,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 5,
  },
  texts: {
    marginLeft: 10,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '400',
    fontSize: 22,
    color: COLORS.black,
    marginTop: 5,
    letterSpacing: 1.2,
  },
});
