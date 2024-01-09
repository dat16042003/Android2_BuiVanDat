import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableHighlight, Alert } from "react-native";
import { Image } from "expo-image";
import { AntDesign } from '@expo/vector-icons';

const SignUp = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  // const [confirmpassword, setConfirmPassword] = React.useState('');
  // const [showConfimPassword, setShowConfimPassword] = React.useState(false);

  const handleLogin = async () => {
    if (!fullname || !password) {
      Alert.alert('Điền thông tin đầy đủ!');
      return;
    }
    // Địa chỉ URL của API
    const apiUrl = 'http://192.168.137.86:8080/api/users';

    const data = {
      fullname: fullname,
      password: password,
      email: email,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {

        navigation.navigate("LogIn");
        Alert.alert('Đăng ký thành công');
      } else {
        Alert.alert('Đăng ký không thành công');
        const errorData = await response.json(); // Đọc dữ liệu lỗi từ phản hồi JSON
        console.error('Lỗi đăng nhập:', errorData);
      }
    } catch (error) {
      console.error('Lỗi kết nối: ', error);
    }
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
            source={require("../assets/Signup/group.png")}
          />
        </View>
        <View style={styles.ContainerTopGach2}>
        </View>
      </View>
      <View style={styles.ContainerMid}>
        <Text style={styles.hello}>{`Hello !`}</Text>
        <Text style={styles.welcomeBack}>WELCOME</Text>
      </View>
      <View style={styles.ContainerBottom}>
        <View style={styles.ContainerBottom1}>
          <View style={styles.NhapThongTin}>

            <View style={styles.NhapThongTinName}>
              <Text style={styles.NhapThongTinNhap}>Enter Name : </Text>
              <TextInput
                style={[styles.Name]}
                placeholder="Name"
                value={fullname}
                onChangeText={text => setFullname(text)}
              />
              <View style={styles.NhapThongTinDuonggach}></View>
            </View>

            <View style={styles.NhapThongTinEmail}>
              <Text style={styles.NhapThongTinNhap}>Enter Email : </Text>
              <TextInput
                style={[styles.Email]}
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <View style={styles.NhapThongTinDuonggach}></View>
            </View>

            <View style={styles.NhapThongTinPassword}>
              <Text style={styles.NhapThongTinNhap}>Enter Password : </Text>
              <View style={styles.NhapThongTinNhapMat}>
                <TextInput
                  style={styles.Pass}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
                <TouchableOpacity style={styles.NhapThongTinNhapMat2} onPress={() => setShowPassword(!showPassword)}>
                  <AntDesign name="eyeo" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.NhapThongTinDuonggach}></View>
            </View>

            {/* <View style={styles.NhapThongTinConfimPassword}>
              <Text style={styles.NhapThongTinNhap}>Import Confirm Password: </Text>
              <View style={styles.NhapThongTinNhapMat}>
                <TextInput
                  style={styles.Pass}
                  placeholder="Confirm Password"
                  secureTextEntry={!showConfimPassword}
                  value={confirmpassword}
                  onChangeText={text => setConfirmPassword(text)}
                />
                <TouchableOpacity style={styles.NhapThongTinNhapMat2} onPress={() => setShowConfimPassword(!showConfimPassword)}>
                  <AntDesign name="eyeo" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.NhapThongTinDuonggach}></View>
            </View> */}

          </View>

          <View style={styles.Nut}>
            <View style={styles.NutLogin}>
              <TouchableHighlight onPress={handleLogin}>
                <View style={styles.NutLoginBackgou}>
                  <Text style={styles.NutLogintxt} onPress={handleLogin}>Sign in</Text>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.NutSingup}>
              <Text style={styles.have}>{`Already have account?`}</Text>

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
    flex: 1,
    flexDirection: "row",
    paddingTop: 33,
  },
  ContainerTopHinh: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  groupIcon: {
    width: "70%",
    height: "70%",
    marginTop: 15,
  },
  ContainerTopGach1: {
    flex: 1.6,
    height: 2,
    width: "100%",
    backgroundColor: "#E0E0E0",
    marginLeft: 20,
    marginTop: 50,
  },
  ContainerTopGach2: {
    flex: 1.6,
    height: 2,
    width: "100%",
    backgroundColor: "#E0E0E0",
    marginRight: 20,
    marginTop: 50,
  },
  ContainerMid: {
    flex: 1,
    flexDirection: "row",
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
    marginTop: 30,
    letterSpacing: 1.2,
    fontWeight: "700",
    fontFamily: "Merriweather-Bold",
    color: "#303030",
  },
  ContainerBottom: {
    flex: 7,

    alignItems: "center",
  },
  ContainerBottom1: {
    width: 350,
    height: 580,
    // backgroundColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 5,
      height: 7,
    },
  },
  Name: {
    fontSize: 17,
    marginTop: 5,
    left: 15,
  },
  NhapThongTinNhap: {
    fontSize: 17,
    fontFamily: "NunitoSans12pt-Regular",
    color: "#000000",
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
  Email: {
    fontSize: 17,
    marginTop: 5,
    left: 15,
  },
  NhapThongTinDuonggach: {
    backgroundColor: "#e0e0e0",//e0e0e0
    width: 300,
    height: 2,
    marginBottom: 30,
    borderRadius: 5,
  },
  NhapThongTin: {
    flex: 2,
    paddingLeft: 20,
    paddingTop: 20,
  },
  Nut: {
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
  NutLogin: {
    flex: 1,
    top: 10,
  },
  NutSingup: {
    flex: 2,
    alignItems: "center",
  },
  signUp: {
    fontSize: 18,
    top: "40%",
    fontWeight: "600",
    fontFamily: "NunitoSans12pt-SemiBold",
    color: "#303030",
    position: "absolute",
  },
  have: {
    top: "20%",
    fontWeight: "600",
    fontFamily: "NunitoSans12pt-SemiBold",
    color: "#808080",
  },








  // childShadowBox: {
  //   shadowOpacity: 1,
  //   shadowOffset: {
  //     width: 0,
  //     height: 7,
  //   },
  //   position: "absolute",
  // }, 
  // logInInner: {
  //   left: 30,
  //   width: 140,
  // },
  // rectangleView: {
  //   left: 240,
  //   width: 140,
  // },
  // logInInnerLayout: {
  //   height: 1,
  //   backgroundColor: "#bdbdbd",
  //   borderRadius: 2,
  //   position: "absolute",
  //   marginTop:109,
  // },
  // Pass:{
  //   top:455,
  //   left:40,
  //   fontSize:17,

  // },
  // confPassword:{
  //   top:464,
  //   left:40,
  //   fontSize:17,
  // },
  // Emai:{
  //   top:337,
  //   left:40,
  //   fontSize:17,
  // },

  // timeFlexBox: {
  //   textAlign: "center",
  //   position: "absolute",
  // },
  // signLayout: {
  //   height: 2,
  //   width: 315,
  //   backgroundColor: "#e0e0e0",
  //   left: 30,
  //   position: "absolute",
  // },
  // signChildLayout: {
  //   height: 1,
  //   width: 105,
  //   backgroundColor: "#bdbdbd",
  //   borderRadius: 2,
  //   top: 97,
  // },
  // passwordPosition: {
  //   textAlign: "left",
  //   left: 30,
  //   position: "absolute",
  // },
  // logInTypo: {
  //   fontFamily: "NunitoSans12pt-SemiBold",
  //   fontWeight: "600",
  // },
  // signInClr: {
  //   color: "#C41E3A",
  //   fontWeight: "700",
  // },
  // iconLayout: {
  //   height: 20,
  //   width: 20,
  //   left: 300,
  //   position: "absolute",
  //   overflow: "hidden",
  // },
  // signUpChild: {
  //   top: 215,
  //   shadowColor: "rgba(138, 149, 158, 0.2)",
  //   shadowRadius: 30,
  //   elevation: 30,
  //   width: 345,
  //   height: 550,
  //   left: 0,
  //   backgroundColor: "#fff",
  // },
  // time: {
  //   marginTop: -9,
  //   fontSize: 15,
  //   letterSpacing: 0,
  //   lineHeight: 18,
  //   // fontFamily: "SF Pro Text",
  //   color: "#000",
  //   fontWeight: "600",
  //   textAlign: "center",
  //   width: 54,
  //   top: "50%",
  //   left: 0,
  // },
  // action: {
  //   marginTop: -8,
  //   left: 20,
  //   height: 18,
  //   width: 54,
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
  //   top: 0,
  //   right: 0,
  //   height: 44,
  //   left: 0,
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
  // signUpItem: {
  //   top: 486,
  // },
  // signUpInner: {
  //   top: 395,
  // },
  // rectangleVieww: {
  //   top: 304,
  // },
  // signUpChild1: {
  //   left: 30,
  // },
  // signUpChild2: {
  //   left: 240,
  // },
  // signUpChild3: {
  //   top: 577,
  // },
  // password: {
  //   top: 427,
  //   color: "#909090",
  //   fontFamily: "NunitoSans12pt-Regular",
  //   textAlign: "left",
  //   fontSize: 14,
  // },
  // email: {
  //   top: 336,
  //   color: "#909090",
  //   fontFamily: "NunitoSans12pt-Regular",
  //   textAlign: "left",
  //   fontSize: 14,
  // },
  // name: {
  //   top: 245,
  //   color: "#909090",
  //   fontFamily: "NunitoSans12pt-Regular",
  //   textAlign: "left",
  //   fontSize: 14,
  // },
  // confirmPassword: {
  //   top: 518,
  //   color: "#909090",
  //   fontFamily: "NunitoSans12pt-Regular",
  //   textAlign: "left",
  //   fontSize: 14,
  // },
  // alreadyHaveAccount: {
  //   color: "#808080",
  // },
  // signIn: {
  //   fontFamily: "NunitoSans12pt-Bold",
  // },
  // alreadyHaveAccountContainer: {
  //   top: 709,
  //   left: 73,
  //   fontSize: 14,
  //   textAlign: "center",
  //   position: "absolute",
  // },
  // groupIcon: {
  //   height: "7.88%",
  //   width: "17.06%",
  //   top: "8.11%",
  //   right: "41.64%",
  //   bottom: "84.01%",
  //   left: "41.3%",
  //   maxWidth: "100%",
  //   maxHeight: "100%",
  //   position: "absolute",
  //   overflow: "hidden",
  // },
  // welcome: {
  //   top: 160,
  //   fontSize: 24,
  //   letterSpacing: 1.2,
  //   fontFamily: "Merriweather-Bold",
  //   textAlign: "left",
  //   left: 30,
  //   position: "absolute",
  // },
  // logIn: {
  //   top: "24%",
  //   left: "37.19%",
  //   fontSize: 18,
  //   color: "#C41E3A",
  //   textAlign: "center",
  //   position: "absolute",
  // },
  // rectangleParent: {
  //   top: 629,
  //   width: 285,
  //   height: 50,
  //   left: 30,
  //   position: "absolute",
  // },
  // eye1Icon: {
  //   top: 456,
  // },
  // eye2Icon: {
  //   top: 547,
  // },
  // signUp: {
  //   flex: 1,
  //   width: "100%",
  //   height: 812,
  //   overflow: "hidden",
  //   backgroundColor: "#fff",
  // },
});

export default SignUp;
