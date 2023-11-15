const handleFavoritePress = (productId, favorites, setFavorites) => {
  const existingIndex = favorites.findIndex((favId) => favId === productId);
  if (existingIndex !== -1) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favId) => favId !== productId)
    );
  } else {
    setFavorites((prevFavorites) => [...prevFavorites, productId]);
  }
};

export default handleFavoritePress;
