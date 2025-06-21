import { Product } from '../db/models/product.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductById = async (productId) => {
  const product = await Product.findById(productId);
  return product;
};

export const createProduct = async (payload) => {
  const product = await Product.create(payload);
  return product;
};

export const patchProduct = async (productId, payload, options = {}) => {
  const product = await Product.findOneAndUpdate({ _id: productId }, payload, {
    new: true,
    ...options,
  });
  if (!product) return null;
  return product;
};

export const deleteProduct = async (productId) => {
  const product = await Product.findOneAndDelete({ _id: productId });
  return product;
};
