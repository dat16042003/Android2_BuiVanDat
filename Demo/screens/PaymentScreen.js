import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import Icon from MaterialCommunityIcons
import { useCart } from "./CartContext"; // Import the CartContext
import { GET_IMG } from "../api/apiService";

const PaymentScreen = ({ navigation }) => {
  // Use the useCart hook to access cart data
  const { cart ,removeFromCart} = useCart();
  // Calculate the total amount to be paid
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(0);
  };

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleIconPress1 = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
  };

  const handleIconPress2 = () => {
    setIsChecked1(false);
    setIsChecked2(!isChecked2);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId); // Use removeFromCart here
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <AntDesign
          onPress={() => navigation.goBack()}
          style={styles.backIcon}
          name="left"
          size={27}
          color="black"
        />
        <Text style={styles.headerText}>Payment</Text>
      </View>

      {/* Display cart items */}
      <View style={styles.cartItems}>
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <View style={styles.ContainerMidImage}>
              <Image
                style={styles.maskGroupIcon4}
                contentFit="cover"
                source={{ uri: GET_IMG("products", item.photo) }}
              />
            </View>
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>
                {item.title}
              </Text>
              <Text style={styles.itemPrice}>
                ${(item.price).toFixed(0)}
              </Text>
              <Text style={styles.itemProductQuantity}>
                ({item.quantity})
              </Text>

            </View>
            <View style={styles.ContainerMidBtn}>
              <AntDesign onPress={() => handleRemoveItem(item.id)} name="closecircleo" size={24} color="black" />
            </View>
          </View>
        ))}
      </View>

      {/* Thông tin người đặt hàng */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoTitle}>Shipping Information</Text>
        <View style={styles.userInfoRow}>
          <Text style={styles.userInfoLabel}>Name:</Text>
          <Text style={styles.userInfoText}>Bui Van Dat</Text>
        </View>
        <View style={styles.userInfoRow}>
          <Text style={styles.userInfoLabel}>Address:</Text>
          <Text style={styles.userInfoText}>103 Phuoc Long B</Text>
        </View>
        <View style={styles.userInfoRow}>
          <Text style={styles.userInfoLabel}>Phone:</Text>
          <Text style={styles.userInfoText}>0946607287</Text>
        </View>
      </View>


      {/* chọn phương thức thanh toán  */}
      <View style={{ flex: 0.5, backgroundColor: "white", borderTopColor: "#ddd", borderTopWidth: 1 }}>
        <View
          style={{
            // borderTopWidth: 1,  // Add borderTop to separate total from cart items
            // borderTopColor: 'black',  // Border color
            marginVertical: 10,
            opacity: 0.05,
            top: -15,
          }}
        />
        <View>
          <Text style={{ fontWeight: "500", fontWeight: 'bold', fontSize: 16.9 }}>
            Payment methods
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/momo.png")}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
              <Text style={{ marginLeft: 10, fontWeight: "400" }}>
                Momo e-wallet
              </Text>
            </View>
            <View style={{ left: 120 }}>
              <TouchableOpacity onPress={handleIconPress1}>
                <Icon
                  name={isChecked1 ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
                  size={21}
                  style={{ marginLeft: 55 }}
                  color="green"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/code.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
            <Text style={{ marginLeft: 10, fontWeight: "400" }}>
              Payment on delivery
            </Text>
            <View style={{ left: 70 }}>
              <TouchableOpacity onPress={handleIconPress2}>
                <Icon
                  name={isChecked2 ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
                  size={21}
                  style={{ marginLeft: 70 }}
                  color="green"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>



      {/* Total amount */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>${calculateTotal()}</Text>
      </View>


      {/* Payment button */}
      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => {
          // Handle payment logic here
          // For demonstration purposes, you can navigate to a success screen
          navigation.navigate("Success");
        }}
      >
        <Text style={styles.paymentButtonText}>PROCEED TO PAYMENT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff',  // Background color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    marginTop: 20,
    marginRight: 10,
  },
  headerText: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartItems: {
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,  // Add borderBottom to separate cart items
    borderBottomColor: '#ddd',  // Border color
    paddingBottom: 10,
  },
  itemDetails: {
    flexDirection: 'column',  // Change to column layout
    marginLeft: 10,
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemProductQuantity: {
    fontSize: 14,
    color: '#666',  // Quantity text color
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginBottom: 20,
    borderTopWidth: 1,  // Add borderTop to separate total from cart items
    borderTopColor: '#ddd',  // Border color
    paddingTop: 10,
  },
  totalText: {
    fontSize: 18,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: '#4B575B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,  // Add margin top to separate the button from the total
  },
  paymentButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    padding: 8,
    fontWeight: 'bold',
  },
  // Add your other styles here
  ContainerMidImage: {
    // Adjust as needed
    width: 70,
    height: 70,
  },
  maskGroupIcon4: {
    // Adjust as needed
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageBorder: {
    borderBottomWidth: 2,  // Add borderBottom to image
    borderBottomColor: '#ddd',  // Border color
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  //thông tin đặt hàng
  userInfoContainer: {
    backgroundColor: 'white',

    borderRadius: 8,

  },
  userInfoTitle: {
    fontSize: 16.9,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  userInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  userInfoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfoText: {
    fontSize: 16,
  },
});

export default PaymentScreen;
