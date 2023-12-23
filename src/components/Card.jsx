import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../helpers/customColor';

export default function Card({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const remove = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(cart => cart.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        remove(product);
      } else {
        add(product);
      }
    } else {
      add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(cart => cart.name === item.name);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      } else {
        setAdded(false);
      }
    };

    getProduct();
  }, [refresh]);
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.row}>
        {added ? (
          <TouchableOpacity style={styles.addedButton}>
            <Text style={styles.buttonText}>ДОБАВЛЕНО</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => define(item)}>
            <Text style={styles.buttonText}>КУПИТЬ</Text>
          </TouchableOpacity>
        )}

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}$</Text>
        </View>

        {added ? (
          <View style={styles.priceContainer}>
            <Text style={styles.price}>+{item.count}</Text>
          </View>
        ) : (
          ''
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    width: '48%',
    marginTop: 10,
  },
  image: {
    height: 140,
    width: '100%',
    borderRadius: 12,
  },
  name: {
    color: COLORS.black,
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    fontSize: 13,
    paddingTop: 10,
  },
  description: {
    color: COLORS.black,
    fontFamily: 'Montserrat-Light',
    fontWeight: '300',
    fontSize: 10,
    paddingTop: 3,
    height: 30,
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: COLORS.main,
  },
  buttonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    color: COLORS.white,
    fontWeight: '700',
  },
  priceContainer: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.main,
    padding: 5,
    marginLeft: 5,
  },
  addedButton: {
    borderRadius: 25,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: COLORS.main,
  },
});
