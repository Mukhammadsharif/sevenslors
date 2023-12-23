import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import Burger from '../assets/icons/header-burger.png';
import Cart from '../assets/icons/header-cart.png';
import Logo from '../assets/icons/header-logo.png';
import Card from '../components/Card';
import {producs} from '../products/producs';

export default function Main() {
  const navigation = useNavigation();
  const [category, setCategory] = useState(0);
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

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => setCategory(0)}
          style={!category ? styles.activeCategory : styles.category}>
          <Text
            style={!category ? styles.activeCategoryText : styles.categoryText}>
            {'Торты'.toUpperCase()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategory(1)}
          style={category === 1 ? styles.activeCategory : styles.category}>
          <Text
            style={
              category === 1 ? styles.activeCategoryText : styles.categoryText
            }>
            {'Капкейки'.toUpperCase()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategory(2)}
          style={category === 2 ? styles.activeCategory : styles.category}>
          <Text
            style={
              category === 2 ? styles.activeCategoryText : styles.categoryText
            }>
            {'Макаруны'.toUpperCase()}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategory(3)}
          style={category === 3 ? styles.activeCategory : styles.category}>
          <Text
            style={
              category === 3 ? styles.activeCategoryText : styles.categoryText
            }>
            {'Напитки'.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {producs[category].map((item, index) => (
          <Card item={item} key={item.name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  logo: {
    width: 200,
    height: 40,
    aspectRatio: 5,
    resizeMode: 'contain',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  activeCategory: {
    height: 50,
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 6,
    backgroundColor: COLORS.main,
  },
  category: {
    height: 50,
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.main,
    borderWidth: 1.5,
    borderStyle: 'solid',
    marginTop: 10,
    borderRadius: 6,
  },
  activeCategoryText: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 18,
  },
  categoryText: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.black,
    fontWeight: '900',
    fontSize: 18,
  },
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'stretch',
    paddingBottom: 40,
  },
});
