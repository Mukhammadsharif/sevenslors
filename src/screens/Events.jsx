import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Close from '../assets/icons/close-i.png';
import Logo from '../assets/icons/main-logo.png';
import CartIcon from '../assets/icons/main-cart.png';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
export default function Events() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <LinearGradient
        colors={['#B5FDB3', '#3DBC72']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={Logo} style={styles.drawerLogo} />
          </View>

          <View style={styles.mainContainer}>
            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>15 июня 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Cake')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>День ТОРТА</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>20 июня 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Desert')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>Фестиваль Десертов</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>10 мая 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('CapCake')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>КапкейкПати</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>22 октября 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Sport')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>Спортивный День</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>30 ктября 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Cwest')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>
                  Квест"Спорт и Сладости"
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>10 июля 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Competation')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>
                  Соревнование по Приготовлению Десертов
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 50,
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  drawerContainer: {
    width: '90%',
    marginTop: 10,
  },
  drawerDate: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'right',
    marginBottom: 2,
    marginRight: 2,
  },
  drawerFirstItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  itemFirstText: {
    color: COLORS.main,
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Montserrat-ExtraBold',
    textAlign: 'center',
  },
  drawerItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 22,
    fontFamily: 'Montserrat-ExtraBold',
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 40,
    height: 40,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 6,
    backgroundColor: COLORS.logoBackgroundColor,
    marginTop: height / 10,
  },
  drawerLogo: {
    aspectRatio: 4,
    resizeMode: 'contain',
  },
  basket: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
});
