import React from "react";
import { Text, View, StyleSheet, SafeAreaView, TextInput } from "react-native";
import COLORS from "./../const/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 5, backgroundColor: COLORS.white }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.plantShop}>Plant Shop</Text>
        </View>
        <Icon
          style={styles.shopping_icon}
          name="shopping-cart"
          size={28}
          color={COLORS.primary}
        />
      </View>

      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={styles.searchContainer}>
          <Icon
            name="search"
            size={28}
            style={{ marginLeft: 20 }}
            color={COLORS.primary}
          />
          <TextInput placeholder="search" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  welcome: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
  },

  plantShop: {
    fontSize: 38,
    fontWeight: "bold",
    color: COLORS.green,
  },

  shopping_icon: {
    marginTop: 40,
    marginLeft: 140,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    borderRadius: 30,
    height: 50,
    marginBottom: 550,
  },
});

export default Home;
