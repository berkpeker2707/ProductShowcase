import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import uuid from "react-native-uuid";

import ProductItem from "./ProductItem";

import handleSearch from "../../helpers/handleSearch";
import handleShowFavorites from "../../helpers/handleShowFavorites";
import handleFilterBrand from "../../helpers/handleFilterBrand";
import handleFavoritePress from "../../helpers/handleFavoritePress";
import getUniqueBrands from "../../helpers/getUniqueBrands";

const Product = (props) => {
  const {
    navigation,
    products,
    filteredProducts,
    setFilteredProducts,
    favorites,
    setFavorites,
    toggleFavorites,
    setToggleFavorites,
  } = props;

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#FFDAB9" }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "#333",
          borderWidth: 1,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        placeholder="Search by title, description, or brand"
        onChangeText={(text) =>
          handleSearch(text, setFilteredProducts, products)
        }
      />

      <View style={{ marginBottom: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFDAB9",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#333",
          }}
          onPress={() =>
            handleShowFavorites(
              setToggleFavorites,
              products,
              setFilteredProducts,
              favorites
            )
          }
        >
          <Text style={{ color: "#333", fontSize: 18, textAlign: "center" }}>
            Show Favorites
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal>
        {getUniqueBrands(products).map((brand) => (
          <View
            style={{ height: 50, marginRight: 10, backgroundColor: "#FFDAB9" }}
            key={uuid.v4()}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#FFDAB9",
                padding: 5,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#333",
              }}
              onPress={() =>
                handleFilterBrand(brand, products, setFilteredProducts)
              }
            >
              <Text
                style={{ color: "#333", fontSize: 18, textAlign: "center" }}
              >
                {brand}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <ScrollView>
        {toggleFavorites && favorites.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Your favorites are empty :( </Text>
          </View>
        ) : (
          filteredProducts.map((product) => (
            <ProductItem
              navigation={navigation}
              key={uuid.v4()}
              id={product.id}
              productImage={product.images[0]}
              productImages={product.images}
              productTitle={product.title}
              productDescription={product.description}
              productPrice={product.price}
              productRating={product.rating}
              discountPercentage={product.discountPercentage}
              stock={product.stock}
              handleFavoritePress={() =>
                handleFavoritePress(product.id, favorites, setFavorites)
              }
              isItfav={favorites.includes(product.id) ? true : false}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Product;
