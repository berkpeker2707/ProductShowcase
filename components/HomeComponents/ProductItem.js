import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const ProductItem = (props) => {
  const {
    navigation,
    id,
    productImage,
    productImages,
    productTitle,
    productDescription,
    productPrice,
    productRating,
    discountPercentage,
    stock,
    handleFavoritePress,
    isItfav,
  } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 10,
        padding: 10,
        alignItems: "center",
      }}
      // onPress={() => console.log(`Product ${id} pressed`)}
      onPress={() =>
        navigation.navigate("ProductPage", {
          productImage,
          productImages,
          productTitle,
          productDescription,
          productPrice,
          discountPercentage,
          stock,
          productRating,
          handleFavoritePress,
          isItfav,
        })
      }
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: productImage }}
        />
        <Text style={{ fontWeight: "bold", marginTop: 5 }}>
          Title: {productTitle}
        </Text>
        <Text style={{ marginTop: 5 }}>Description: {productDescription}</Text>
        <Text style={{ marginTop: 5, color: "orange" }}>
          Raiting: {productRating}
        </Text>
        <Text style={{ marginTop: 5, color: "green" }}>
          Price: {productPrice}
        </Text>

        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#333",
            padding: 5,
            borderRadius: 5,
          }}
          onPress={() => handleFavoritePress(id)}
        >
          <Text style={{ color: "#fff" }}> {isItfav ? "⭐" : "☆"} </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
