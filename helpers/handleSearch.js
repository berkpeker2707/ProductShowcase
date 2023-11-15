const handleSearch = (text, setFilteredProducts, products) => {
  setFilteredProducts(
    products.filter(
      (product) =>
        product.title.toLowerCase().includes(text.toLowerCase()) ||
        product.description.toLowerCase().includes(text.toLowerCase()) ||
        product.brand.toLowerCase().includes(text.toLowerCase())
    )
  );
};

export default handleSearch;
