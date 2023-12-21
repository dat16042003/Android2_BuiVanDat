import { StyleSheet, Text, TouchableHighlight, View, } from "react-native";
import React from "react";
import { Image } from "expo-image";
const ProductItem = ({ imageSource, textContent, textPrice, navigation }) => {
  return (
    <View style={styles.Product}>
      {/* <TouchableHighlight onPress={() => navigation.navigate('ProductDetail')}> */}
      <Image
        source={{
          uri: imageSource,
        }}
        // source={require("../assets/Home/ao-jean-w2atn08230bosht.jpeg")}             
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
      />
      {/* </TouchableHighlight>  */}
      <View style={styles.shoppingBagIconWrapper}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/Home/shopping-bag-icon.png")}
        />
      </View>
      <Text style={[styles.minimalStand, styles.text1Position]}>
        {textContent}
      </Text>
      <Text style={[styles.text1, styles.text1Position]}>$ {textPrice}</Text>
    </View>
  )
}
export default ProductItem

const styles = StyleSheet.create({
  Product: {
    width: 180,
    height: 255,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  minimalStand: {
    color: "#606060",
    top: 210,
    fontFamily: "NunitoSans12pt-Regular",
  },
  text1Position: {
    left: 2,
    textAlign: "left",
    fontSize: 14,
    marginStart: 9,
    position: "absolute",
  },
  text1: {
    color: "#303030",
    fontFamily: "NunitoSans12pt-Bold",
    top: 234,
    fontWeight: "700",
  },
  maskGroupIcon: {
    height: 200,
  },
  iconPosition: {
    width: 160,
    height: 200,
    top: 0,
    left: 0,
    marginStart: 9,
    borderRadius: 10,
  },
  shoppingBagIconWrapper: {
    top: 160,
    left: 130,
    borderRadius: 6,
    backgroundColor: "rgba(96, 96, 96, 0.4)",
    padding: 5,
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
})