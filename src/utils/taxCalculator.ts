/**
 * Tax Calculator Module (taxCalculator.ts):
Create a calculateTax() function to handle tax calculations for products.
This function should return the dollar amount that a product is taxed at. For example, if a product costs $100 and is taxed at 10%, the function should return $10.
Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field. Apply a default standard tax rate of 4.75% to each product; 
however, products with a category of “groceries” should only be taxed at 3%.
 */


import {Product} from "../models/Products"



export function calculateTax(product: Product): number{
    let taxRate = 4.75

    if (product.category === "groceries"){
        taxRate = 3
    }
    const taxAmount = (product.basePrice * taxRate)/100

    return Number(taxAmount.toFixed(2))
}

