import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

const Profile = () => {
  return (
    <View style={styles.profile}>

      <View style={[styles.headerBar, styles.headerBarFlexBox]}>
        <Image
          style={[styles.risearch2LineIcon, styles.headerBarChildLayout]}
          contentFit="cover"
          source={require("../assets/Profile/risearch2line.png")}
        />
        <Text style={styles.myCart}>Profile</Text>
        <Image
          style={[styles.headerBarChild, styles.headerBarChildLayout]}
          contentFit="cover"
          source={require("../assets/Profile/frame-151.png")}
        />
      </View>

      <View style={styles.dragger} />
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/Profile/huan-rose-tin-dan-ba-chi-co-an-dau-buoi-an-cut.jpg")}//ellipse-30.png
      />
      <Text style={[styles.brunoPham, styles.myOrdersTypo]}>Bui Van Dat</Text>
      <Text style={[styles.bruno203gmailcom, styles.alreadyHave10Typo]}>
        dat@gmail.com
      </Text>
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.instanceChild, styles.instanceChildPosition]} />
        <Text style={[styles.myOrders, styles.myOrdersPosition]}>
          My orders
        </Text>
        <Text style={[styles.alreadyHave10, styles.myOrdersPosition]}>
          Already have 10 orders
        </Text>
        <Image
          style={styles.instanceItem}
          contentFit="cover"
          source={require("../assets/Profile/frame-15.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.instanceInner, styles.instanceChildPosition]} />
        <Text style={[styles.myOrders, styles.myOrdersPosition]}>
          Shipping Addresses
        </Text>
        <Text style={[styles.alreadyHave10, styles.myOrdersPosition]}>
          03 Addresses
        </Text>
        <Image
          style={styles.instanceItem}
          contentFit="cover"
          source={require("../assets/Profile/frame-15.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.rectangleView, styles.instanceChildPosition]} />
        <Text style={[styles.myOrders, styles.myOrdersPosition]}>
          Payment Method
        </Text>
        <Text style={[styles.alreadyHave10, styles.myOrdersPosition]}>
          You have 2 cards
        </Text>
        <Image
          style={styles.instanceItem}
          contentFit="cover"
          source={require("../assets/Profile/frame-15.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.instanceChild2, styles.instanceChildPosition]} />
        <Text style={[styles.myOrders, styles.myOrdersPosition]}>
          My reviews
        </Text>
        <Text style={[styles.alreadyHave10, styles.myOrdersPosition]}>
          Reviews for 5 items
        </Text>
        <Image
          style={styles.instanceItem}
          contentFit="cover"
          source={require("../assets/Profile/frame-15.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.instanceChild4, styles.instanceChildPosition]} />
        <Text style={[styles.myOrders, styles.myOrdersPosition]}>Setting</Text>
        <Text style={[styles.alreadyHave10, styles.myOrdersPosition]}>
          Notification, Password, FAQ, Contact
        </Text>
        <Image
          style={styles.instanceItem}
          contentFit="cover"
          source={require("../assets/Profile/frame-15.png")}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParent2: {//0000000000000000000000000000000000000000000000000000000000
    bottom: "0%",
    height: 75,
    position: "absolute",
  },
  headerBarLayout: {
    width: "100%",
  },
  instanceChild1: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 50,
    elevation: 50,
    width: "100%",
    backgroundColor: "#fff",
  },
  instanceShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    left: "0%",
    position: "absolute",
  },
  clarityhomeSolidParent: {
    height: "32%",
    width: "77.6%",
    top: "26.67%",
    right: "11.2%",
    bottom: "41.33%",
    left: "11.2%",
  },
  headerBarFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  clarityhomeSolidIcon: {
    overflow: "hidden",
  },
  shapeIconLayout1: {
    height: 24,
    width: 24,
    top: 5,
    backgroundColor: "#fff"
  },
  marker1Icon: {
    marginLeft: 70,
    overflow: "hidden",
  },

  myOrdersTypo: {
    textAlign: "left",
    fontFamily: "NunitoSans12pt-Bold",
    fontWeight: "700",
  },
  alreadyHave10Typo: {
    textAlign: "justify",
    color: "#808080",
    fontFamily: "NunitoSans12pt-Regular",
    lineHeight: 15,
  },
  groupParentLayout: {
    width: 355,
    height: 80,
    left: 20,
    position: "absolute",
  },
  instanceChildPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: "#fff",
  },
  myOrdersPosition: {
    left: "5.97%",
    position: "absolute",
  },
  barLayout: {
    width: 375,
    left: 0,
  },
  headerBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  headerBarChildLayout: {
    height: 20,
    width: 20,
  },
  dragger: {
    marginLeft: -67.5,
    top: 802,
    left: "50%",
    borderRadius: 5,
    backgroundColor: "#606060",
    width: 135,
    height: 5,
    display: "none",
    position: "absolute",
  },
  profileChild: {
    top: 106,
    width: 80,
    height: 80,
    left: 20,
    position: "absolute",
  },
  brunoPham: {
    top: 122,
    fontSize: 20,
    color: "#303030",
    left: 120,
    position: "absolute",
  },
  bruno203gmailcom: {
    top: 154,
    fontSize: 14,
    left: 120,
    position: "absolute",
  },
  instanceChild: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(138, 149, 158, 0.2)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  myOrders: {
    top: "22.5%",
    fontSize: 18,
    color: "#242424",
    textAlign: "left",
    fontFamily: "NunitoSans12pt-Bold",
    fontWeight: "700",
  },
  alreadyHave10: {
    top: "60%",
    fontSize: 12,
    textAlign: "justify",
    color: "#808080",
    fontFamily: "NunitoSans12pt-Regular",
    lineHeight: 15,
  },
  instanceItem: {
    height: "30%",
    width: "7.16%",
    top: "35%",
    right: "2.99%",
    bottom: "35%",
    left: "89.85%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 216,
  },
  instanceInner: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(138, 149, 158, 0.2)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  rectangleGroup: {
    top: 311,
  },
  rectangleView: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(138, 149, 158, 0.2)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  rectangleContainer: {
    top: 406,
  },
  instanceChild2: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(138, 149, 158, 0.2)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  groupView: {
    top: 501,
  },
  instanceChild4: {
    elevation: 40,
    shadowRadius: 40,
    shadowColor: "rgba(138, 149, 158, 0.2)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  rectangleParent1: {
    top: 596,
  },
  navigationBarChild: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  // marker1Icon: {
  //   marginLeft: 65,
  // },
  // clarityhomeSolidParent: {
  //   height: "32%",
  //   width: "77.6%",
  //   top: "26.67%",
  //   right: "11.2%",
  //   bottom: "41.33%",
  //   left: "11.2%",
  // },
  navigationBar: {
    top: 737,
    height: 75,
    position: "absolute",
  },
  risearch2LineIcon: {
    overflow: "hidden",
  },
  myCart: {
    fontSize: 16,
    fontFamily: "Merriweather-Bold",
    marginLeft: 24,
    color: "#303030",
    fontWeight: "700",
    textAlign: "center",
    flex: 1,
  },
  headerBarChild: {
    marginLeft: 24,
  },
  headerBar: {
    top: "3%",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: 375,
    left: "5%",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  profile: {
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Profile;
