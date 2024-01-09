import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';

const LogIn = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = () => {
    axios.get('http://192.168.137.86:8080/api/users')
      .then(response => {

        const data = response.data;
        const users = data.content;
        const user = users.find(user => user.email === email);
        if (user) {
          if (user.password === password) {
            const fullname = user.fullname;
            navigation.navigate("Home");
            Alert.alert(`Hello ${fullname}`);
          } else {
            Alert.alert('Mật khẩu không đúng.');
          }
        } else {
          Alert.alert('Tên người dùng không tồn tại.');
        }
      })
      .catch(error => {
        console.error('Lỗi khi tải dữ liệu người dùng:', error);
      });
  };
  return (
    <View style={styles.Container}>
      <View style={styles.ContainerTop}>
        <View style={styles.ContainerTopGach1}>
        </View>
        <View style={styles.ContainerTopHinh}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/Login/group.png")}
          />
        </View>
        <View style={styles.ContainerTopGach2}>
        </View>
      </View>
      <View style={styles.ContainerMid}>
        <Text style={styles.hello}>{`Hello !`}</Text>
        <Text style={styles.welcomeBack}>WELCOME BACK</Text>
      </View>
      <View style={styles.ContainerBottom}>
        <View style={styles.ContainerBottom1}>

          <View style={styles.NhapThongTin}>

            <View style={styles.NhapThongTinEmail}>
              <Text style={styles.NhapThongTinNhap}>Enter Email: </Text>
              <TextInput
                style={[styles.Emai]}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <View style={styles.NhapThongTinDuonggach}></View>
            </View>

            <View style={styles.NhapThongTinPassword}>
              <Text style={styles.NhapThongTinNhap}>Enter Password: </Text>
              <View style={styles.NhapThongTinNhapMat}>
                <TextInput
                  style={styles.Pass}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={text => setPassWord(text)}
                />
                <TouchableOpacity style={styles.NhapThongTinNhapMat2} onPress={() => setShowPassword(!showPassword)}>
                  <AntDesign name="eyeo" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.NhapThongTinDuonggach}></View>
            </View>

          </View>

          <View style={styles.Nut}>
            <View style={styles.NutForgetpassword}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </View>
            <View style={styles.NutLogin}>
              <TouchableHighlight onPress={handleLogin}>
                <View style={styles.NutLoginBackgou}>
                  <Text style={styles.NutLogintxt} onPress={handleLogin}>Log in</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.NutSingup}>
              <Text style={styles.signUp} onPress={() => navigation.navigate('SignUp')}>SIGN UP</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor:"#666362",
  },
  ContainerTop: {
    flex: 1.2,
    flexDirection: "row",
    paddingTop: 33,
  },
  ContainerTopHinh: {
    flex: 1.5,
    alignItems: "center",
  },
  groupIcon: {
    width: "70%",
    height: "70%",
    marginTop: 15,
  },
  ContainerTopGach1: {
    flex: 2,
    height: 2,
    width: "100%",
    backgroundColor: "#E0E0E0",
    marginLeft: 20,
    marginTop: 50,
  },
  ContainerTopGach2: {
    flex: 2,
    height: 2,
    width: "100%",
    backgroundColor: "#E0E0E0",
    marginRight: 20,
    marginTop: 50,
  },
  ContainerMid: {
    flex: 1.3,
  },
  hello: {
    fontSize: 35,
    fontFamily: "Merriweather-Regular",
    color: "#909090",
    marginTop: 20,
    marginLeft: 25,
  },
  welcomeBack: {
    fontSize: 26,
    letterSpacing: 1.2,
    fontWeight: "700",
    fontFamily: "Merriweather-Bold",
    color: "#303030",
    marginLeft: 25,
  },
  ContainerBottom: {
    flex: 7,
  },
  ContainerBottom1: {
    width: 350,
    height: 500,
    marginLeft: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 5,
      height: 7,
    },

  },
  NhapThongTin: {
    flex: 1.5,
    paddingLeft: 20,
    paddingTop: 20,
  },
  NhapThongTinNhap: {
    fontSize: 17,
    fontFamily: "NunitoSans12pt-Regular",
    color: "#909090",
    textAlign: "left",
  },
  NhapThongTinNhapMat: {
    flexDirection: "row",
  },
  NhapThongTinNhapMat2: {
    flex: 1.3,
    marginTop: 5,
  },
  Pass: {
    fontSize: 17,
    marginTop: 5,
    left: 15,
    flex: 6,
  },
  Emai: {
    fontSize: 17,
    marginTop: 5,
    left: 15,
  },
  Nut: {
    flex: 2,
  },
  NutForgetpassword: {
    flex: 1,
  },
  forgotPassword: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 26,
    marginTop: 4,
    alignSelf: "flex-end",
    fontFamily: "NunitoSans12pt-SemiBold",
    color: "#303030",
  },
  NutLogin: {
    flex: 1,
  },
  NutLoginBackgou: {
    width: 250,
    height: 60,
    backgroundColor: "#242424",
    alignSelf: "center",
    borderRadius: 10,
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    shadowOffset: {
      width: 5,
      height: 7,
    },
  },
  NutLogintxt: {
    fontFamily: "NunitoSans12pt-SemiBold",
    fontSize: 25,
    color: "#FFFFFF",
  },
  NutSingup: {
    flex: 2,
    alignItems: "center",
  },
  signUp: {
    fontSize: 18,
    top: "20%",
    fontWeight: "600",
    fontFamily: "NunitoSans12pt-SemiBold",
    color: "#303030",
    position: "absolute",
  },
  NhapThongTinDuonggach: {
    backgroundColor: "#e0e0e0",
    width: 300,
    height: 2,
    marginBottom: 25,
    borderRadius: 5,
  },























































  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    position: "absolute",
  },

  logInInner: {
    left: 30,
    width: 140,
  },
  rectangleView: {
    left: 240,
    width: 140,
  },
  logInInnerLayout: {
    height: 1,
    backgroundColor: "#bdbdbd",
    borderRadius: 2,
    position: "absolute",
    marginTop: 109,
  },


  gg: {
    top: 600,
  },
  logLayout: {
    height: 2,
    width: 315,
    backgroundColor: "#e0e0e0",
    left: 30,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: "NunitoSans12pt-Regular",
    fontSize: 14,
    color: "#909090",
    textAlign: "left",
    left: 30,
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: "NunitoSans12pt-SemiBold",
    fontSize: 18,
    position: "absolute",
  },
  logInChild: {
    top: 278,
    shadowColor: "rgba(138, 149, 158, 0.2)",
    shadowRadius: 30,
    elevation: 30,
    width: 345,
    height: 437,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    backgroundColor: "#fff",
  },

  helloWelcomeContainer: {
    marginTop: 180,
    lineHeight: 45,
    textAlign: "left",
    marginLeft: 15,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    fontSize: 15,
    letterSpacing: 0,
    lineHeight: 18,
    // fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "center",
    fontWeight: "600",
    width: 54,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  action: {
    marginTop: -8,
    left: 20,
    height: 18,
    width: 54,
    top: "50%",
    position: "absolute",
  },
  containerIcon: {
    marginTop: -4.84,
    right: 15,
    width: 67,
    height: 12,
    top: "50%",
    position: "absolute",
  },
  iphoneXBarsStatusDef: {
    top: 0,
    right: -1,
    left: 1,
    height: 44,
    position: "absolute",
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
  logInItem: {
    top: 372,
  },
  logInChild1: {
    top: 468,
  },
  email: {
    top: 313,
  },
  password: {
    top: 409,
  },
  eye2Icon: {
    top: 438,
    left: 300,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },

  // instanceChild: {
  //   height: "570%",
  //   width: "17.54%",
  //   top: "100%",
  //   right: "82.46%",
  //   bottom: "-570%",
  //   left: "0%",
  //   borderRadius: 8,
  //   backgroundColor: "#242424",
  //   shadowColor: "rgba(48, 48, 48, 0.25)",
  //   shadowRadius: 20,
  //   elevation: 20,
  //   transform: [
  //     {
  //       rotate: "-90deg",
  //     },
  //   ],
  // },
  instanceChild: {
    height: "570%",
    width: "17.54%",
    top: "100%",
    right: "82.46%",
    bottom: "-570%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#242424",
    shadowColor: "rgba(48, 48, 48, 0.25)",
    shadowRadius: 20,
    elevation: 20,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  logIn1: {
    top: 180,
    color: "#fff",
    position: "absolute",

  },
  rectangleParent: {
    top: 355,
    width: 285,
    height: 50,
    left: 150,
    position: "absolute",
  },
  logIn: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

export default LogIn;
