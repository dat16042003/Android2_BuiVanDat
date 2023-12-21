import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { AntDesign, FontAwesome5, } from '@expo/vector-icons';
import { useCart } from './CartContext';
import { GET_IMG } from "../api/apiService";
import InputSpinner from "react-native-input-spinner";
const Cart = ({ navigation }) => {

  const { cart, removeFromCart, updateCartItemQuantity } = useCart();
  const onPressSuccess = () => {
    navigation.navigate("Success");
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
        <Text style={styles.ContainerBotomtxt} onPress={onPressSuccess}> CART CHECKOUT </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  innerplus: {
    marginBottom: 10,
  },
  Container: {
    flex: 1,
    marginTop: 33,
  },
  ContainerTop: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
  },
  ContainerMid: {
    flex: 2,
    bottom: 0,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
  },
  TongTien: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white', // Set background color if needed
    borderTopWidth: 1, // Add a border if needed
    borderColor: '#ccc',
    padding: 10,
  },
  TongTienTotal: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  total: {
    fontSize: 23,
    fontWeight: "700",
    marginLeft: 20,
    fontFamily: "NunitoSans12pt-Bold",
    color: "#808080",
  },
  text1: {
    fontSize: 23,
    fontWeight: "700",
    marginLeft: 6,
    fontFamily: "NunitoSans12pt-Bold",
    color: "#303030",
  },
  ContainerItem: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
  },
  ContainerItem1: {
    flex: 15,
    marginBottom: 15,
  },
  ContainerMidImage: {
    flex: 1,
  },
  ContainerMidText: {
    flex: 2,
  },
  ContainerMidText1: {
    flex: 2,
  },
  ContainerMidTextIcon: {
    flex: 1,
    width: 120,
    flexDirection: "row",
  },
  ContainerMidTextIconCong: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    alignItems: "center",
    borderRadius: 8,
  },
  NutCongTru: {
    marginVertical: 6,
  },
  ContainerMidTextIconSo: {
    flex: 1.3,
    alignItems: "center",
    marginVertical: 4,
  },
  SoLuong: {
    fontSize: 15,
    fontFamily: "NunitoSans12pt-Bold",
  },
  ContainerMidTextIconTru: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    alignItems: "center",
    borderRadius: 8,
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
    height: 100,
    width: 100,
  },
  ContainerBotom: {
    backgroundColor: "#4B575B",
    height: 80,
    marginHorizontal: 0, // Đặt giá trị marginHorizontal thành 0 để tràn ra hai bên
    marginBottom: 10,
    shadowOpacity: 0.7,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    alignItems: "center",
  },
  ContainerBotomtxt: {
    fontSize: 26,
    color: "#FFFFFF",
    marginVertical: 16,
    fontFamily: "NunitoSans12pt-Bold",
  },
  IconSearch: {
    flex: 1,
  },
  textMake: {
    flex: 5,
  },
  IconCart: {
    flex: 1,
  },
  makeHomeBeautifulContainer: {
    textAlign: "center",
    marginTop: 9,
  },
  Search: {
    marginHorizontal: 15,
    marginTop: 12,
  },
  Cart: {
    marginHorizontal: 15,
    marginVertical: 15,
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
    fontFamily: "NunitoSans12pt-Bold",
  },
});

export default Cart;