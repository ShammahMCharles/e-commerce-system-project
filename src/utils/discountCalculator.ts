/**
 * Implement Utilities:

Discount Calculator Module (discountCalculator.ts):
Create a calculateDiscount() function to handle discount calculations for products.
This function should return the dollar amount that a product is discounted by.
 For example, if a product costs $100 and has a 10% discount, the function should return $10.
 */

import { Product } from "../models/Products";

export function calculateDiscount(product: Product): number {
    const discountAmount =
        (product.basePrice * product.discountPercentage)/ 100
    return Number(discountAmount.toFixed(2))
}

