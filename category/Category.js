import React from "react";
import { StyleSheet, Text, View } from "react-native";

const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];

const CategoryList = () => {
  return (
    <View style={styles.categoryContainer}>
      {categories.map((item, index) => (
        <Text>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
  },
});

export default CategoryList;
