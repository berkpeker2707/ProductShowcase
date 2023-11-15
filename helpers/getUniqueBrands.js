const getUniqueBrands = (products) => {
  return [...new Set(products.map((product) => product.brand))];
};

export default getUniqueBrands;
