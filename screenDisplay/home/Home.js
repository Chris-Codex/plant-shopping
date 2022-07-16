import React from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeProduct from "../home/HomeProduct";
import CategoryList from "../../category/Category";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.welcomeContainer}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.welcomeText2}>Plant Shopper</Text>
        </View>
        <View style={styles.sortBtn}>
          <Icon name="shopping-cart" size={30} />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" style={styles.icon} size={30} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <View style={styles.searchBtn}>
          <Icon name="sort" size={30} color="white" />
        </View>
      </View>

      <View style={styles.categoryContainer}>
        <CategoryList />
      </View>

      <View style={styles.productContainer}>
        <HomeProduct />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  welcomeContainer: {
    flex: 1,
    marginTop: 50,
  },

  searchContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 50,
    backgroundColor: "#E5E8E5",
    borderRadius: 10,
  },

  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
  },

  welcomeText2: {
    fontSize: 32,
    fontWeight: "bold",
  },

  sortBtn: {
    position: "absolute",
    height: 50,
    width: 50,
    right: -15,
    borderRadius: 13,
    justifyContent: "center",
    marginLeft: 20,
  },

  searchBtn: {
    marginLeft: 10,
    width: 50,
    height: 50,
    backgroundColor: "#08A20A",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Home;
