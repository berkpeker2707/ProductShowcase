import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import ProductPage from "./screens/ProductPage";

import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";

const Stack = createStackNavigator();

const API_URL = "https://dummyjson.com/products";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [favorites, setFavorites] = useState([]);
  const [toggleFavorites, setToggleFavorites] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          children={(props) => (
            <HomeScreen
              {...props}
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
          )}
        />
        <Stack.Screen
          name="ProductPage"
          children={(props) => <ProductPage {...props} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
