import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const ProductPage = (props) => {
  const {
    route: { params },
  } = props;

  const {
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
  } = params;

  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: "#FFDAB9" }}>
      <View
        style={{ alignItems: "center", padding: 10, backgroundColor: "#fff" }}
      >
        <Image
          style={{ width: 200, height: 200, borderRadius: 10 }}
          source={{ uri: productImage }}
        />
        <Text style={{ fontWeight: "bold", marginTop: 10 }}>
          Title: {productTitle}
        </Text>
        <Text style={{ marginTop: 5 }}>Description: {productDescription}</Text>
        <Text style={{ marginTop: 5, color: "orange" }}>
          Rating: {productRating}
        </Text>
        <Text style={{ marginTop: 5, color: "green" }}>
          Price: {productPrice}
        </Text>
        <Text style={{ marginTop: 5, color: "rgb(50,205,50)" }}>
          Price after discount:{" "}
          {productPrice - productPrice * (discountPercentage / 100)}
        </Text>
        <Text style={{ marginTop: 5, color: "red" }}>Stock: {stock}</Text>
        <ScrollView horizontal style={{ marginTop: 10 }}>
          {productImages.map((img, index) => (
            <Image
              key={index}
              style={{ width: 50, height: 50, marginRight: 5, borderRadius: 5 }}
              source={{ uri: img }}
            />
          ))}
        </ScrollView>

        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#333",
            padding: 10,
            borderRadius: 5,
          }}
          onPress={() => handleFavoritePress()}
        >
          <Text style={{ color: "#fff" }}>
            {" "}
            {isItfav ? "Remove from Favorites" : "Add to Favorites"}{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductPage;
