/**
 * Handle Asynchronous Operations:

API Service (apiService.ts):
Create API requests using async/await and Promises.
Implement functions to fetch product data and handle errors using try/catch.
 * 
 */
import type { ApiProduct } from "../models/Products";

export async function fetchProducts(): Promise<ApiProduct[]>{
    try {
     const response = await fetch (
        "https://dummyjson.com/products"
    )
     const data = await response.json();

     return data.products

    } catch (error) {
        console.log("Failed to fetch products", error)
        return []
    }
}