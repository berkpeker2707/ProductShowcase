const handleShowFavorites = (
  setToggleFavorites,
  products,
  setFilteredProducts,
  favorites
) => {
  setToggleFavorites((toggleFavorites) => {
    const newToggleValue = !toggleFavorites;
    if (newToggleValue) {
      setFilteredProducts(
        products.filter((product) => favorites.includes(product.id))
      );
    } else {
      setFilteredProducts(products);
    }
    return newToggleValue;
  });
};

export default handleShowFavorites;
