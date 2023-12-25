import * as React from "react";
import { useFonts } from "expo-font";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Boarding from "./screens/Boarding";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";

import ProductDetail from "./screens/ProductDetail";
import Success from "./screens/Success";
import Favorite from "./screens/Favorite";
import Profile from "./screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { AntDesign, Feather , Octicons, FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import Cart from "./screens/Cart";
import { CartProvider } from "./screens/CartContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Gelasio-SemiBold": require("./assets/fonts/Gelasio-SemiBold.ttf"),
    "Gelasio-Bold": require("./assets/fonts/Gelasio-Bold.ttf"),
    "Gelasio-Regular": require("./assets/fonts/Gelasio-Regular.ttf"),
    "Gelasio-Medium": require("./assets/fonts/Gelasio-Medium.ttf"),

    "Merriweather-Regular": require("./assets/fonts/Merriweather-Regular.ttf"),
    "Merriweather-Bold": require("./assets/fonts/Merriweather-Bold.ttf"),

    "NunitoSans12pt-Regular": require("./assets/fonts/NunitoSans_10pt-Regular.ttf"),
    "NunitoSans12pt-SemiBold": require("./assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
    "NunitoSans12pt-Bold": require("./assets/fonts/NunitoSans_10pt-Bold.ttf"),
    "NunitoSans12pt-Light": require("./assets/fonts/NunitoSans_10pt-Light.ttf"),


  });

  if (!fontsLoaded && !error) {
    return null;
  }
  // function Navigation() {
  //   return (
  //     <Tab.Navigator

  //       tabBarOption={{
  //         style: {
  //           // position:"absolute",

  //         }
  //       }}>
  //       <Tab.Screen
  //         name="Home"
  //         component={Home}
  //         style={styles.IconView}
  //         options={{
  //           tabBarLabel: "",
  //           headerShown: false,
  //           tabBarIcon: ({ focused }) =>
  //             focused ? (
  //               <Octicons name="home" size={26} color="#9AFEFF" />
  //             ) : (
  //               <Octicons name="home" size={26} color="black" />
  //             ),
  //         }}
  //       />
  //       <Tab.Screen
  //         name="Cart"
  //         component={Cart}
  //         options={{
  //           tabBarLabel: "",
  //           headerShown: false,
  //           tabBarIcon: ({ focused }) =>
  //             focused ? (
  //               <AntDesign name="hearto" size={24} color="#9AFEFF" />
  //             ) : (
  //               <AntDesign name="hearto" size={24} color="black" />
  //             ),
  //         }}
  //       />

  //       <Tab.Screen
  //         name="Bell"
  //         component={Cart}
  //         options={{
  //           tabBarLabel: "",
  //           headerShown: false,
  //           tabBarIcon: ({ focused }) =>
  //             focused ? (
  //               <Feather name="shopping-cart" size={24} color="#9AFEFF" />
  //             ) : (
  //               <Feather name="shopping-cart" size={24} color="black" />
  //             ),
  //         }}
  //       />

  //       <Tab.Screen
  //         name="Profile"
  //         component={Profile}
  //         options={{
  //           tabBarLabel: "",
  //           headerShown: false,
  //           tabBarIcon: ({ focused }) =>
  //             focused ? (
  //               <FontAwesome name="user-o" size={24} color="#9AFEFF" />
  //             ) : (
  //               <FontAwesome name="user-o" size={24} color="black" />
  //             ),
  //         }}
  //       />
  //     </Tab.Navigator>
  //   );
  // }
  return (
    <>
      <CartProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="FirstPage" >
            <Stack.Screen
              name="Boarding"
              component={Boarding}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />

            {/* <Stack.Screen
              name="Main"
              component={Navigation}
              options={{ headerShown: false }}
            />  */}

            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Favorite"
              component={Favorite}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Success"
              component={Success}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </CartProvider>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  IconView: {
  },
  Containerrr: {
  },
});
