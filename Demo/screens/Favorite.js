import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { AntDesign, Feather, } from '@expo/vector-icons';
const Favorite = () => {
  return (

    <View style={styles.Container}>

      <View style={styles.ContainerTop}>
        <View style={styles.IconSearch}>
          <AntDesign style={styles.Search} name="search1" size={27} color="black" />
        </View>
        <View style={styles.textMake}>
          <Text style={styles.makeHomeBeautifulContainer}>
            <Text style={styles.beautiful}>Favorites</Text>
          </Text>
        </View>
        <View style={styles.IconCart}>
          <Feather style={styles.Cart} name="shopping-cart" size={27} color="black" />
        </View>
      </View>

      <View style={styles.ContainerMid}>
        <View style={styles.ContainerItem}>



        </View>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    marginTop: 33,
  },
  ContainerTop: {
    flex: 0.8,
    flexDirection: "row",
  },
  ContainerMid: {
    flex: 8,
    //backgroundColor: "#909876",
    padding: 10,
  },
  ContainerItem: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 100,
    borderRadius: 10,
    flexDirection: "row",
  },
  ContainerMidImage: {
    flex: 1,
    backgroundColor: "#000000",
  },
  ContainerMidText: {
    flex: 2,
    backgroundColor: "#00FF99",
  },
  ContainerMidBtn: {
    flex: 0.4,
    backgroundColor: "#00AA99",
  },
  maskGroupIcon4: {
    height: 100,
    width: 100,
  },
  ContainerBotom: {
    flex: 1,
    backgroundColor: "#FF66CC",
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
    marginVertical: 15,
  },
  Search: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  Cart: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  beautiful: {
    fontFamily: "Gelasio-Bold",
    color: "#242424",
    fontWeight: "700",
    fontSize: 20,
  },

  coffeeTable: {
    color: "#606060",
    fontSize: 16,
    fontFamily: "NunitoSans12pt-SemiBold",
    fontWeight: "600",
  },
  shapeIcon: {
    width: 24,
  },
  shapeIconLayout: {
    height: 24,
    width: 24,
  },
  rectangleParent: {
    width: 34,
  },
  groupParentLayout: {
    height: 34,
    width: 34,
  },
  groupChild: {
    backgroundColor: "#e0e0e0",
    opacity: 0.4,
    width: 34,
    borderRadius: 10,
  },
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  text4: {
    color: "#303030",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "NunitoSans12pt-Bold",
  },



















  // favoriteLayout1: {
  //   width: "100%",
  //   backgroundColor: "#fff",
  // },

  // favoriteLayout: {
  //   height: 1,
  //   width: 370,
  //   backgroundColor: "#f0f0f0",
  //   borderRadius: 10,
  //   left: 20,
  //   position: "absolute",
  // },
  // textFlexBox: {
  //   textAlign: "left",
  //   left: 141,
  // },
  // textTypo: {
  //   color: "#303030",
  //   fontWeight: "700",
  //   fontSize: 17,
  // },
  // maskGroupLayout: {
  //   height: 100,
  //   width: 100,
  // },
  // coffeeChairPosition: {
  //   top: 231,
  //   position: "absolute",
  // },
  // minimalStandPosition: {
  //   top: 356,
  //   position: "absolute",
  // },




  // time: {
  //   marginTop: -9,
  //   fontSize: 15,
  //   letterSpacing: 0,
  //   lineHeight: 18,
  //   // fontFamily: "SF Pro Text",
  //   color: "#000",
  //   textAlign: "center",
  //   fontWeight: "600",
  //   width: 54,
  //   top: "50%",
  //   left: 0,
  //   position: "absolute",
  // },
  // action: {
  //   marginTop: -8,
  //   height: 18,
  //   width: 54,
  //   left: 20,
  //   top: "50%",
  //   position: "absolute",
  // },
  // containerIcon: {
  //   marginTop: -4.84,
  //   right: 15,
  //   width: 67,
  //   height: 12,
  //   top: "50%",
  //   position: "absolute",
  // },
  // iphoneXBarsStatusDef: {
  //   right: 0,
  //   height: 44,
  //   left: 0,
  //   top: 0,
  //   position: "absolute",
  // },

  // dragger: {
  //   marginLeft: -67.5,
  //   top: 802,
  //   left: "50%",
  //   borderRadius: 5,
  //   backgroundColor: "#606060",
  //   width: 135,
  //   height: 5,
  //   display: "none",
  //   position: "absolute",
  // },
  // favoriteChild: {
  //   top: 218,
  // },
  // favoriteItem: {
  //   top: 343,
  // },
  // favoriteInner: {
  //   top: 468,
  // },
  // rectangleView: {
  //   top: 593,
  // },
  // minimalLamp: {
  //   color: "#606060",
  //   fontSize: 14,
  //   fontFamily: "NunitoSans12pt-SemiBold",
  //   fontWeight: "600",
  //   top: 606,
  //   position: "absolute",
  // },
  // text: {
  //   top: 630,
  //   fontFamily: "NunitoSans12pt-Bold",
  //   color: "#303030",
  //   fontWeight: "700",
  //   fontSize: 16,
  //   textAlign: "left",
  //   left: 141,
  //   position: "absolute",
  // },
  // maskGroupIcon: {
  //   left: 21,
  //   top: 606,
  //   position: "absolute",
  // },
  // maskGroupIcon1: {
  //   height: 100,
  //   width: 100,
  //   left: 21,
  // },
  // coffeeChair: {
  //   textAlign: "left",
  //   left: 141,
  //   color: "#606060",
  //   fontSize: 14,
  //   fontFamily: "NunitoSans12pt-SemiBold",
  //   fontWeight: "600",
  // },
  // text1: {
  //   top: 255,
  //   fontFamily: "NunitoSans12pt-Bold",
  //   color: "#303030",
  //   fontWeight: "700",
  //   fontSize: 16,
  //   textAlign: "left",
  //   left: 141,
  //   position: "absolute",
  // },
  // maskGroupIcon2: {
  //   height: 100,
  //   width: 100,
  //   left: 21,
  // },
  // minimalStand: {
  //   textAlign: "left",
  //   left: 141,
  //   color: "#606060",
  //   fontSize: 14,
  //   fontFamily: "NunitoSans12pt-SemiBold",
  //   fontWeight: "600",
  // },
  // text2: {
  //   top: 380,
  //   fontFamily: "NunitoSans12pt-Bold",
  //   color: "#303030",
  //   fontWeight: "700",
  //   fontSize: 16,
  //   textAlign: "left",
  //   left: 141,
  //   position: "absolute",
  // },
  // maskGroupIcon3: {
  //   top: 481,
  //   left: 20,
  //   height: 100,
  //   width: 100,
  //   position: "absolute",
  // },
  // minimalDesk: {
  //   top: 481,
  //   color: "#606060",
  //   fontSize: 14,
  //   fontFamily: "NunitoSans12pt-SemiBold",
  //   fontWeight: "600",
  // },
  // text3: {
  //   top: 505,
  //   color: "#303030",
  //   fontWeight: "700",
  //   fontSize: 16,
  //   fontFamily: "NunitoSans12pt-Bold",
  // },
  // maskGroupIcon4: {
  //   top: 106,
  //   left: 20,
  //   height: 100,
  //   width: 100,
  //   position: "absolute",
  // },




  // stytop:{
  //   left: 360
  // },

  // rectangleGroup: {
  //   top: 297,
  //   width: 34,
  // },
  // rectangleContainer: {
  //   top: 422,
  //   width: 34,
  // },
  // groupView: {
  //   top: 547,
  //   width: 34,
  // },
  // rectangleParent1: {
  //   top: 672,
  //   width: 34,
  // },
  // rectangleParent2: {//0000000000000000000000000000000000000000000000000000000000
  //   bottom:"0%",
  //   height: 75,
  //   position: "absolute",
  // },
  // headerBarLayout: {
  //   width: "100%",
  // },
  // instanceChild1: {
  //   height: "100%",
  //   top: "0%",
  //   right: "0%",
  //   bottom: "0%",
  //   shadowColor: "rgba(0, 0, 0, 0.05)",
  //   shadowRadius: 50,
  //   elevation: 50,
  //   width: "100%",
  //   backgroundColor: "#fff",
  // },
  // instanceShadowBox: {
  //   shadowOpacity: 1,
  //   shadowOffset: {
  //     width: 0,
  //     height: -2,
  //   },
  //   left: "0%",
  //   position: "absolute",
  // },
  // clarityhomeSolidParent: {
  //   height: "32%",
  //   width: "77.6%",
  //   top: "26.67%",
  //   right: "11.2%",
  //   bottom: "41.33%",
  //   left: "11.2%",
  // },
  // headerBarFlexBox1: {
  //   alignItems: "center",
  //   flexDirection: "row",
  //   position: "absolute",
  // },
  // clarityhomeSolidIcon: {
  //   overflow: "hidden",
  // },
  // shapeIconLayout1: {
  //   height: 24,
  //   width: 24,
  //   top:5,
  //   backgroundColor:"#fff"
  // },
  // marker1Icon: {
  //   marginLeft: 70,
  //   overflow: "hidden",
  // },



  // shapeIcon1: {
  //   top: 232,
  //   width: 24,
  //   position: "absolute",
  // },
  // shapeIcon2: {
  //   top: 357,
  //   width: 24,
  //   position: "absolute",
  // },
  // shapeIcon3: {
  //   top: 483,
  //   width: 24,
  //   position: "absolute",
  // },
  // shapeIcon4: {
  //   top: 608,
  //   width: 24,
  //   position: "absolute",
  // },
  // // instanceItem: {
  // //   height: "668%",
  // //   width: "14.97%",
  // //   top: "100%",
  // //   right: "85.03%",
  // //   bottom: "-668%",
  // //   borderRadius: 8,
  // //   backgroundColor: "#242424",
  // //   shadowColor: "rgba(48, 48, 48, 0.25)",
  // //   shadowRadius: 20,
  // //   elevation: 20,
  // //   transform: [
  // //     {
  // //       rotate: "-90deg",
  // //     },
  // //   ],
  // // },
  // addAllTo: {
  //   top: "24%",
  //   left: "27.84%",
  //   fontSize: 18,
  //   color: "#fff",
  //   fontFamily: "NunitoSans12pt-SemiBold",
  //   textAlign: "center",
  //   fontWeight: "600",
  //   position: "absolute",
  // },
  // rectangleParent3: {
  //   bottom:"10%",
  //   width: 334,
  //   height: 50,
  //   left: "10%",
  //   position: "absolute",
  //   borderRadius: 8,
  //   backgroundColor: "#242424",
  //   shadowColor: "rgba(48, 48, 48, 0.25)",
  //   shadowRadius: 20,
  //   elevation: 20,

  //   shadowOpacity: 1,
  //   shadowOffset: {
  //     width: 0,
  //     height: -2,
  //   },
  // },
  // myCart: {
  //   fontFamily: "Merriweather-Bold",
  //   marginLeft: 24,
  //   color: "#303030",
  //   fontWeight: "700",
  //   fontSize: 16,
  //   textAlign: "center",
  //   flex: 1,
  // },
  // headerBarChild: {
  //   marginLeft: 24,
  // },
  // headerBar: {
  //   top: "4%",
  //   justifyContent: "center",
  //   width: 375,
  //   left: "5%",
  //   backgroundColor: "#fff",
  //   flexDirection: "row",
  // },
  // favorite: {
  //   height: 812,
  //   overflow: "hidden",
  //   flex: 1,
  //   width: "100%",
  // },
});

export default Favorite;
