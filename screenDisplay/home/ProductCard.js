import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get("screen").width / 2 - 30;

const ProductCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text>RenderProduct</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#999",
    height: 225,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 24,
  },
});

export default ProductCard;
