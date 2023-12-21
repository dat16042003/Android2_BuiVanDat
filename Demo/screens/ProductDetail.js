import * as React from "react";
import { Image } from "expo-image";
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { GET_IMG } from "../api/apiService";
import InputSpinner from "react-native-input-spinner";
import { useCart } from './CartContext';
const ProductDetail = ({ navigation, route }) => {
  const { product } = route.params;
  const { addToCart, findCartItemInCart, updateCartItemQuantity } = useCart();
  const [totalPrice, setTotalPrice] = React.useState(product.price);
  const [quantity, setQuantity] = React.useState(1);
  const handleQuantityChange = (num) => {
    setQuantity(num);
  };

  const onPressCart = () => {
    const existingCartItem = findCartItemInCart(product.id);

    if (existingCartItem) {
      // If the product is already in the cart, update the quantity
      updateCartItemQuantity(product.id, existingCartItem.quantity + quantity);
    } else {

      addToCart({ ...product, quantity });
    }

    navigation.navigate('Cart');
  };
  const onPressHome = () => {
    navigation.navigate("Home");
  };

  return (


    <View style={styles.Container}>

      <AntDesign onPress={onPressHome} style={styles.Search} name="left" size={27} color="black" />

      <View style={styles.ContainerTop}>
        <Image
          style={styles.maskGroupIcon}
          contentFit="contain"
          source={{ uri: GET_IMG("products", product.photo), }}
        />
      </View>

      <View style={styles.ContainerMid}>
        <View style={styles.ContainerMid1}>
          <Text style={styles.minimalStand}>{product.title}</Text>
        </View>
        <View style={styles.ContainerMid2}>
          <View style={styles.ContainerMid21}>
            <Text style={styles.textTypo}>$ {product.price}</Text>
          </View>
        </View>
      </View>

      <View style={styles.ContainerFooter}>
        <View style={styles.ContainerFooter1}>
          <Entypo style={styles.ContainerFooter1star} name="star" size={24} color="#FFBF00" />
          <View><Text style={styles.text2}>4.5</Text></View>
          <View><Text style={styles.reviews}>(50 reviews)</Text></View>
        </View>
        <View style={styles.ContainerFooter2}>
          <Text style={styles.minimalStandIs}>
            {product.description}
          </Text>
        </View>
      </View>

      <View style={styles.ContainerBotom} >
        <Text style={styles.ContainerBotomtxt} onPress={onPressCart}>ADD TO CART</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ContainerTop: {
    flex: 6,
  },
  Search: {
    top: 40,
    left: 20,
    flex: 1,
  },
  maskGroupIcon: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 30,
  },
  ContainerMid: {
    flex: 1.2,
  },
  ContainerMid1: {
    flex: 1,
  },
  ContainerMid2: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  ContainerMid21: {
    flex: 2,
    marginVertical: 2,
  },
  textTypo: {
    fontFamily: "NunitoSans12pt-Bold",
    color: "#303030",
    fontSize: 25,
  },
  ContainerMid22: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    height: "90%",
  },
  ContainerMid22plus: {
    flex: 1,

  },

  ContainerMid22plussss: {
    backgroundColor: "#DCDCDC",
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  ContainerMid22plu1: {
    backgroundColor: "#DCDCDC",
    alignSelf: "center",
    top: 9.5,
    borderRadius: 8,
  },

  ContainerMid22text: {
    flex: 1,
    alignItems: "center",
    alignSelf: 'center',
  },
  text: {
    letterSpacing: 0.9,
    color: "#242424",
    fontFamily: "NunitoSans12pt-SemiBold",
    fontSize: 18,
  },
  minimalStand: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Gelasio-Medium",
    textAlign: "left",
    color: "#303030",
  },

  ContainerFooter: {
    flex: 3.1,
  },
  ContainerFooter1: {
    flex: 1,
    flexDirection: "row",
  },
  ContainerFooter1star: {
    marginVertical: 5,
    marginLeft: 10,
  },
  text2: {
    fontSize: 19,
    marginLeft: 5,
    fontFamily: "NunitoSans12pt-Bold",
    color: "#303030",
    marginVertical: 3,
  },
  reviews: {
    marginLeft: 20,
    color: "#808080",
    fontSize: 14,
    fontFamily: "NunitoSans12pt-SemiBold",
    marginVertical: 8,
  },
  ContainerFooter2: {
    flex: 5,
  },
  minimalStandIs: {
    fontWeight: "300",
    fontFamily: "NunitoSans12pt-Light",
    color: "#606060",
    textAlign: "justify",
    width: "90%",
    left: 15,
    fontSize: 16,
    position: "absolute",
  },
  groupLayout: {
    height: 30,
    width: 30,
  },
  ContainerBotom: {
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
  },
  ContainerBotom: {
    flex: 1,
    backgroundColor: "#4B575B",
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
    marginVertical: 14,
    fontFamily: "NunitoSans12pt-Bold",
  },





});

export default ProductDetail;
