import * as React from "react";
import { Text, StyleSheet, View, ScrollView, TouchableHighlight, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { AntDesign, Feather, Ionicons, FontAwesome5, MaterialIcons, Octicons, FontAwesome } from '@expo/vector-icons';
import ProductItem from "./ProductItem";
import { GET_ALL, GET_IMG } from "../api/apiService";
import { TextInput } from "react-native";

const Home = ({ navigation }) => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const onPressCart = () => {
    navigation.navigate('Cart');
  };

  const onPressFavorite = () => {
    navigation.navigate('Favorite');
  };

  const onPressProfile = () => {
    navigation.navigate('Profile');
  };

  const handleCategoryPress = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredProductsByCategory = () => {
    return selectedCategory === null ? productData : productData.filter((product) => product.category.id === selectedCategory);
  };

  const filterProducts = () => {
    const productsToFilter = filteredProductsByCategory();

    if (!searchText.trim()) {
      return productsToFilter;
    }

    return productsToFilter.filter((product) => {
      const productName = product.title || '';
      const productDescription = product.description || '';

      return (
        productName.toLowerCase().includes(searchText.toLowerCase()) ||
        productDescription.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  useEffect(() => {
    GET_ALL("products")
      .then((response) => {
        const responseData = response.data;

        if (responseData && Array.isArray(responseData.content)) {
          setProductData(responseData.content);
        } else {
          console.error("Data received from the API is not in a supported format.");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });

    GET_ALL("categories")
      .then((response) => {
        const responseData = response.data;

        if (responseData && Array.isArray(responseData.content)) {
          setCategories(responseData.content);
        } else {
          console.error("Categories received from the API is not in a supported format.");
        }
      })
      .catch((error) => {
        console.error("Error fetching categories: ", error);
      });
  }, []);

  return (
    <View style={styles.Contrainer}>
      <View style={styles.ContrainerTop}>
        <View style={styles.IconSearch}>
          <AntDesign style={styles.Search} name="search1" size={27} color="black" />
        </View>
        <View style={styles.textMake}>
          <Text style={styles.makeHomeBeautifulContainer}>
            <Text style={styles.beautiful}>Rhodi Shop</Text>
          </Text>
        </View>
        <View style={styles.IconCart}>
          <Feather onPress={onPressCart} style={styles.Cart} name="shopping-cart" size={27} color="black" />
        </View>
      </View>

      <View style={styles.searchbg}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>



      <View style={styles.ContrainerLeft}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            key="allProducts"
            style={[
              styles.categoryItem,
              selectedCategory === null ? styles.selectedCategoryItem : null,
            ]}
            onPress={() => handleCategoryPress(null)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === null ? styles.selectedCategoryText : null,
              ]}
            >  All
            </Text>
          </TouchableOpacity>

          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryItem,
                category.id === selectedCategory ? styles.selectedCategoryItem : null,
              ]}
              onPress={() => handleCategoryPress(category.id)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category.id === selectedCategory ? styles.selectedCategoryText : null,
                ]}
              >
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}

        </ScrollView>
      </View>

      <View style={styles.ContrainerMid}>
        <ScrollView>
          <View style={styles.ScrollVVew}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              filterProducts().map((product, index) => (
                <TouchableHighlight
                  key={product.id}
                  style={{ marginBottom: 20, borderRadius: 15 }}
                  activeOpacity={0.0}
                  underlayColor="#FFF"
                  onPress={() => {
                    const updatedProduct = { ...product, total: product.price };
                    navigation.navigate("ProductDetail", {
                      product: updatedProduct,
                    });
                  }}
                >
                  <ProductItem
                    key={index}
                    imageSource={GET_IMG("products", product.photo)}
                    textContent={product.title}
                    textPrice={product.price}
                  />
                </TouchableHighlight>
              ))
            )}
          </View>
        </ScrollView>
      </View>

      <View style={styles.ContrainerBtoom}>
        <View style={styles.IconHome}>
          <Octicons style={styles.home} name="home" size={28} color="black" />
        </View>
        <View style={styles.IconC}>
          <Feather style={styles.cartmenu} onPress={onPressCart} name="shopping-cart" size={28} color="black" />
        </View>
        <View style={styles.IconC}>
          <AntDesign style={styles.favourite} onPress={onPressFavorite} name="hearto" size={28} color="black" />
        </View>
        <View style={styles.IconProfile}>
          <FontAwesome style={styles.profile} onPress={onPressProfile} name="user-o" size={28} color="black" />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  Contrainer: {
    marginTop: 33,
    flex: 1,
    backgroundColor: "#000000",
  },
  ContrainerTop: {
    // borderBottomWidth: 1,  // Add borderBottom to separate cart items
    // borderBottomColor: '#ddd',  // Border color
    flex: 0.9,
    flexDirection: "row",
    backgroundColor: "#fff",
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
  Search: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  Cart: {
    marginHorizontal: 15,
    marginVertical: 15,
  },


  ContrainerLeft: {
    flex: 0.9,
    backgroundColor: "#fff",
    flexDirection: 'row',
  },
  ///////////////////
  ContrainerBtoom: {
    // borderTopWidth: 1,  // Add borderBottom to separate cart items
    // borderTopColor: '#ddd',  // Border color
    flex: 1.2,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  IconHome: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  IconC: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
  IconProfile: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },

  /////////////////////
  IconFlex: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
  },
  ContrainerMid: {
    flex: 9,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  ScrollVVew: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ContrainerBotom: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#CCCCCC",
  },

  makeHomeBeautifulContainer: {
    textAlign: "center",
    marginTop: 20,
  },
  makeHome: {
    fontSize: 17,
    fontFamily: "Gelasio-Regular",
    color: "#909090",
  },
  beautiful: {
    fontFamily: "Gelasio-Bold",
    color: "#726B6B",
    fontWeight: "700",
    fontSize: 25,
  },

  categoryItem: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  categoryText: {
    fontSize: 20,
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    // color: 'black',
    fontFamily: "Gelasio-Regular",

  },
  searchbg:{
    flex: 0.9,
    flexDirection: "row",
    backgroundColor: "#fff",
  },

  searchInput: {
    flex: 1,
    height: 40, // Adjust the height as needed
    paddingHorizontal: 15,
    backgroundColor: 'white',
    fontSize: 17,
    borderRadius: 20, // Set border radius for rounded corners
    borderWidth: 1, // Add border width
    borderColor: 'gray', // Set border color to black
    margin :5,
  },

});

export default Home;
