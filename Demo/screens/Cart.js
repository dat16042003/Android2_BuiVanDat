import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { GET_IMG } from "../api/apiService";
import { AntDesign, FontAwesome5, } from '@expo/vector-icons';
import { useCart } from './CartContext';

import InputSpinner from "react-native-input-spinner";
const Cart = ({ navigation }) => {

  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  // const onPressSuccess = () => {
  //   navigation.navigate("Success");
  // };

  const onPressPayment = () => {
    navigation.navigate("PaymentScreen"); // Navigate to the PaymentMethod screen
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId); // Use removeFromCart here
  };
  const handleQuantityChange = (itemId, quantity) => {
    updateCartItemQuantity(itemId, quantity);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(0);
  };
  return (
    <View style={styles.Container}>

      <View style={styles.ContainerTop}>
        <View style={styles.IconSearch}>
          <AntDesign onPress={() => navigation.goBack()} style={styles.Search} name="left" size={27} color="black" />
        </View>
        <View style={styles.textMake}>
          <Text style={styles.makeHomeBeautifulContainer}>
            <Text style={styles.beautiful}>CART</Text>
          </Text>
        </View>
        <View style={styles.IconCart}>
          {/* <Feather style={styles.Cart} name="shopping-cart" size={27} color="black" /> */}
        </View>
      </View>

      <View style={styles.ContainerMid}>
        {cart.map((item) => (
          <View key={item.id} style={styles.ContainerItem1}>
            <View style={styles.ContainerItem}>
              <View style={styles.ContainerMidImage}>
                <Image
                  style={styles.maskGroupIcon4}
                  contentFit="cover"
                  source={{ uri: GET_IMG("products", item.photo), }}
                />
              </View>

              <View style={styles.ContainerMidText}>

                <View style={styles.ContainerMidText1}>
                  <Text style={styles.coffeeTable}>
                    {item.title}
                  </Text>
                  <Text style={styles.text4}>${(item.price).toFixed(0)}</Text>
                </View>

                <InputSpinner
                  max={10}
                  min={1}
                  step={1}
                  skin={"round"}
                  color={"#fff"}
                  value={item.quantity}
                  height={30}
                  width={100}
                  shadow={false}
                  style={styles.innerplus}
                  background={"#FFF"}
                  showBorder={false}
                  onChange={(value) => handleQuantityChange(item.id, value)}
                />

              </View>

              <View style={styles.ContainerMidBtn}>
                <AntDesign onPress={() => handleRemoveItem(item.id)} name="closecircleo" size={24} color="black" />
              </View>

            </View>
            <View style={styles.Containerduonggach}></View>
          </View>
        ))}

        <View style={styles.TongTien}>
          <View style={styles.TongTienTotal}>
            <Text style={styles.total}>Total:</Text>
            <Text style={styles.text1}>{calculateTotal()} $</Text>
          </View>
        </View>
      </View>

      <View style={styles.ContainerBotom}>
        <Text style={styles.ContainerBotomtxt} onPress={onPressPayment}> PAYMENT </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  ContainerTop: {
    flexDirection: "row",
    //backgroundColor: "#DDDDDD",
    alignItems: "center",
    paddingVertical: 10,
  },
  //-----------------------------------------------------------
  ContainerMid: {
    flex: 1,
    padding: 5,
  },

  ContainerItem1: {
    //marginBottom: 15,
    marginTop: 10,
  },

  ContainerItem: {
    flexDirection: "row",
    //backgroundColor: "#DDDDDD",
    borderRadius: 10,
    overflow: "hidden",
  },

  //-------------------------------------------------
  TongTien: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  TongTienTotal: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  total: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "NunitoSans12pt-Bold",
    color: "#808080",
  },
  text1: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 6,
    fontFamily: "NunitoSans12pt-Bold",
    color: "#303030",
  },

  ContainerMidImage: {
    flex: 1,
  },
  ContainerMidText: {
    flex: 2,
    marginLeft: 10,
    justifyContent: "space-between",
  },
  ContainerMidText1: {
    flex: 2,
  },
  ContainerMidBtn: {
    flex: 0.4,
    alignItems: "center",
    paddingTop: 8,
  },
  Containerduonggach: {
    marginTop: 6,
    width: "100%",
    height: 2,
    backgroundColor: "#CCCCCC",
  },
  maskGroupIcon4: {
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  ContainerBotom: {
    backgroundColor: "#4B575B",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom :7,
  },
  ContainerBotomtxt: {
    fontSize: 26,
    color: "#FFFFFF",
    marginVertical: 16,
    fontFamily: "NunitoSans12pt-Bold",
  },
  IconSearch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:5,
  },
  textMake: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  IconCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  makeHomeBeautifulContainer: {
    textAlign: "center",
    marginTop: 10,
    paddingBottom:5,
  },
  Search: {
    marginHorizontal: 15,
    marginTop: 12,
  },
 
  beautiful: {
    fontFamily: "Gelasio-Bold",
    color: "#242424",
    fontWeight: "700",
    fontSize: 24,
  },

  coffeeTable: {
    color: "#606060",
    fontSize: 16,
    fontFamily: "NunitoSans12pt-SemiBold",
    fontWeight: "600",
  },
  text4: {
    color: "#303030",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "NunitoSans12pt-SemiBold",
  },
  innerplus: {
    marginBottom: 10,
  },
   
});

export default Cart;