import { Product } from '../db/models/product.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  return product;
};
