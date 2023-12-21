import * as React from "react";
import { Image } from "expo-image";
import { Button, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Boarding = ({ navigation }) => {
  return (
    <View style={styles.boarding}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={styles.containerText}>
        <Text style={[styles.makeYour, styles.makeYourPosition]}>MAKE YOUR</Text>
        <Text style={[styles.homeBeautiful, styles.makeYourPosition]}>CLOTHES BEAUTIFUL</Text>
        <Text style={[styles.theBestSimple1, styles.getStartedTypo]}>
          The best simple place where you discover most wonderful furnitures and make your home beautiful
        </Text>
      </View>
      <TouchableHighlight style={styles.touc} onPress={() => navigation.navigate('LogIn')}>
        <View style={styles.rectangleParent}>
          <Text style={[styles.getStarted, styles.getStartedTypo]}>
            Get Started
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  makeYourPosition: {
    textAlign: "left",
    left: 30,
  },
  containerText: {
    marginTop: 240,
  },
  touc: {
    top: "70%",
    left: "30%",
    position: "absolute",
  },
  getStartedTypo: {
    fontSize: 18,
  },
  maskGroupIcon: {
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  makeYour: {
    fontSize: 24,
    letterSpacing: 1.2,
    color: "#606060",
    fontFamily: "Gelasio-SemiBold",
    fontWeight: "600",
  },
  theBestSimple1: {
    left: 59,
    marginTop: 10,
    lineHeight: 35,
    fontFamily: "NunitoSans12pt-Regular",
    color: "#808080",
    textAlign: "justify",
    width: 296,
  },
  getStarted: {
    color: "#fff",
    fontFamily: "Gelasio-SemiBold",
    marginTop: 13,
  },
  rectangleParent: {
    height: 55,
    width: 150,
    borderRadius: 6,
    backgroundColor: "#242424",
    elevation: 30,
    shadowOpacity: 1,
    alignItems: "center",

  },
  homeBeautiful: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Gelasio-Bold",
    color: "#303030",
  },
  boarding: {
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default Boarding;
