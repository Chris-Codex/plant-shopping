import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import plants from "../../const/plants";
import ProductCard from "./ProductCard";

const HomeProduct = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={plants}
        renderItem={(item) => <ProductCard plant={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeProduct;
