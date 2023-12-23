import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Trash from '../assets/icons/cart-trash-icon.png';
import {COLORS} from '../helpers/customColor';
export default function CartItem({cart}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const increment = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === cart.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          newArray[selectedIndex].count = newArray[selectedIndex].count + 1;
          await AsyncStorage.setItem('cartList', JSON.stringify(carts));
          await setRefresh(!refresh);
        }
      }
    }
  };

  const decrement = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === cart.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          if (newArray[selectedIndex].count > 0) {
            newArray[selectedIndex].count = newArray[selectedIndex].count - 1;
            await AsyncStorage.setItem('cartList', JSON.stringify(carts));
            await setRefresh(!refresh);
          }
        }
      }
    }
  };

  const deleteItem = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== cart.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <Image source={cart.image} style={styles.image} />
      </View>

      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{cart.name}</Text>

          <Text style={styles.description}>{cart.description}</Text>

          <View style={styles.row}>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>{cart.price * cart.count}$</Text>
            </View>

            <View style={styles.countContainer}>
              <TouchableOpacity
                onPress={() => {
                  if (cart.count > 1) {
                    decrement();
                  } else {
                    // deleteItem();
                  }
                }}>
                <Text style={styles.action}>-</Text>
              </TouchableOpacity>

              <Text style={styles.count}>{cart?.count}</Text>

              <TouchableOpacity onPress={() => increment()}>
                <Text style={styles.action}>+</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => deleteItem()}>
              <Image source={Trash} style={styles.trash} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    borderRadius: 12,
    flexDirection: 'row',
  },
  info: {
    marginLeft: 20,
    width: '60%',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 12,
  },
  name: {
    color: COLORS.black,
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    fontSize: 16,
  },
  description: {
    color: COLORS.black,
    fontFamily: 'Montserrat-Light',
    fontWeight: '300',
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.white,
  },
  trash: {
    width: 20,
    height: 24,
    marginLeft: 10,
  },
  plus: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  minus: {
    width: 25,
    height: 25,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  priceContainer: {
    backgroundColor: COLORS.main,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countContainer: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.main,
    flexDirection: 'row',
    marginLeft: 10,
  },
  action: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.black,
  },
  count: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.black,
    marginHorizontal: 15,
  },
});
