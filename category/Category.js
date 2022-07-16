import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];

const CategoryList = () => {
  const [catIndex, setCatIndex] = React.useState(0);
  return (
    <View style={styles.categoryContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setCatIndex(index)}
          activeOpacity={0.8}
        >
          <Text
            key={index}
            style={[
              styles.categoryText,
              catIndex == index && styles.catTextSelected,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
  },

  catTextSelected: {
    color: "#08A20A",
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: "#08A20A",
  },
});

export default CategoryList;
