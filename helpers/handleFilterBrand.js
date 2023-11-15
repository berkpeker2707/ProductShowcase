const handleFilterBrand = (brand, products, setFilteredProducts) => {
  setFilteredProducts(
    products.filter((product) =>
      product.brand.toLowerCase().includes(brand.toLowerCase())
    )
  );
};

export default handleFilterBrand;
