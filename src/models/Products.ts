/**
 * Part: 3
 * Develop Product Class:
Product Base Class (Product.ts):

Define a Product class that includes the appropriate 
properties based on data provided in the API response.
Include methods displayDetails() 
and getPriceWithDiscount(), and implement 
them appropriately based on the provided data
 */



export interface ApiProduct {
    id: number
    title:string
    description: string
    price: number
    images: string
    category: string
    discountPercentage: number
}


export class Product {
    id: number
    title:string
    description: string
    basePrice: number
    thumbnail: string
    category: string
    discountPercentage: number
 
    constructor(apiItem: ApiProduct){
        this.id = apiItem.id;
        this.title = apiItem.title;
        this.description = apiItem.description
        this.category = apiItem.category
        this.basePrice = apiItem.price
        this.thumbnail = apiItem.images?.[0] || 'placeholder.jpg'
        this.discountPercentage = apiItem.discountPercentage
    }

     displayDetails() {
    console.log(`=== ${this.title} ===`);
    console.log(`Description: ${this.description}`);
    console.log(`Base Price: $${this.basePrice.toFixed(2)}`);
  }
    getPriceWithDiscount(discountPercentage: number) {
    const discountAmount = (this.basePrice * discountPercentage) / 100;
    const finalPrice = this.basePrice - discountAmount;
    return Number(finalPrice.toFixed(2));
  }

  
}

const response = await fetch("https://dummyjson.com/products");
const data = await response.json();

const productInstances = data.products.map(
  (item: ApiProduct) => new Product(item)
);

const firstProduct = productInstances[0];

console.log(firstProduct)
console.log(firstProduct.displayDetails())
console.log(firstProduct.getPriceWithDiscount(10))