import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from './helpers/customColor';
import Main from './screens/Main';
import Cart from './screens/Cart';
import Order from './screens/Order';
import Reserve from './screens/Reserve';
import Table from './screens/Table';
import Contacts from './screens/Contacts';
import Translations from './screens/Translations';
import Events from './screens/Events';
import Cake from './screens/Cake';
import Desert from './screens/Desert';
import CapCake from './screens/CapCake';
import Sport from './screens/Sport';
import Cwest from './screens/Cwest';
import Competation from './screens/Competation';
import Logo from './assets/icons/main-logo.png';
import CartIcon from './assets/icons/main-cart.png';
import Close from './assets/icons/close-i.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Order" component={Order} />
      <Drawer.Screen name="Reserve" component={Reserve} />
      <Drawer.Screen name="Table" component={Table} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Translations" component={Translations} />
      <Drawer.Screen name="Events" component={Events} />
      <Drawer.Screen name="Cake" component={Cake} />
      <Drawer.Screen name="Desert" component={Desert} />
      <Drawer.Screen name="CapCake" component={CapCake} />
      <Drawer.Screen name="Sport" component={Sport} />
      <Drawer.Screen name="Cwest" component={Cwest} />
      <Drawer.Screen name="Competation" component={Competation} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <LinearGradient
        colors={['#B5FDB3', '#3DBC72']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <View style={styles.container}>
          <View style={styles.closeIconContainer}>
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <Image source={Close} style={styles.close} />
            </TouchableOpacity>
          </View>

          <View style={styles.header}>
            <Image source={Logo} style={styles.drawerLogo} />
          </View>

          <View style={styles.mainContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Main')}
              style={styles.drawerFirstItem}>
              <Text style={styles.itemFirstText}>
                {'Главная'.toUpperCase()}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={styles.drawerItem}>
              <Text style={styles.itemText}>{'Корзина'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Translations')}
              style={styles.drawerItem}>
              <Text style={styles.itemText}>{'Транслации'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Contacts')}
              style={styles.drawerItem}>
              <Text style={styles.itemText}>{'Контакты'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Reserve')}
              style={styles.drawerItem}>
              <Text style={styles.itemText}>
                {'Резерв столика'.toUpperCase()}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Events')}
              style={styles.drawerItem}>
              <Text style={styles.itemText}>{'События'.toUpperCase()}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <View>
              <Image source={CartIcon} style={styles.basket} />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? height - (height / 100) * 6 : height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    alignItems: 'flex-end',
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
  drawerFirstItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  itemFirstText: {
    color: COLORS.main,
    fontWeight: '900',
    fontSize: 22,
    fontFamily: 'Montserrat-ExtraBold',
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
    aspectRatio: 5,
    resizeMode: 'contain',
  },
  basket: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
});
