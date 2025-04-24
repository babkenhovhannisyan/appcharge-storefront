import { fakerAPI } from './fakerAPI';
import { Product } from './types';

export async function getProducts(): Promise<Product[]> {
  const response = await fakerAPI.get<Product[]>(`/products?limit=20`);
  return response.data;
}

export async function getProduct(id: number): Promise<Product> {
  const response = await fakerAPI.get<Product>(`/products/${id}`);
  return response.data;
} 