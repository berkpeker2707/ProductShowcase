import React from "react";
import { View, Text } from "react-native";
import Product from "../components/HomeComponents/Product";

const HomeScreen = (props) => {
  const {
    navigation,
    loading,
    error,
    products,
    filteredProducts,
    setFilteredProducts,
    favorites,
    setFavorites,
    toggleFavorites,
    setToggleFavorites,
  } = props;

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#bcbcbc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Product
        navigation={navigation}
        loading={loading}
        error={error}
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleFavorites={toggleFavorites}
        setToggleFavorites={setToggleFavorites}
      />
    </View>
  );
};

export default HomeScreen;
