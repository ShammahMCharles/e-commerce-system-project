Reflection
To fulfil the required OOP principles, I developed a Product class to represent each product as an object and an ApiProduct interface to provide the format of the data obtained from the API. 
The Product class contained methods like displayDetails() and getPriceWithDiscount() in addition to properties like the product ID, title, description, price, category, and discount percentage. 
In order to keep various tasks within the application structured, I also developed distinct modules for calculating taxes and discounts. 

One of the biggest challenges I encountered was understanding how TypeScript handled types when working with API data. 
Initially I faced issues with parameters being assigned an any type and had to learn how to properly use interface and type only-imports.
I also faced issues with Tailwind. I'm new to tailwind and relied heavy on docs to better understand the styling options.

I retrieved product data using async/await and the fetch() API for asynchronous tasks. 
I used await to wait for the response before processing the data because API queries return Promises.
In order to manage problems without causing the application to crash, I enclosed my API calls in try/catch blocks.
In order to differentiate between various kinds of problems, I also developed a unique error-handling tool.
All things considered, this project gave me a better understanding of how TypeScript, OOP, asynchronous programming, 
and error handling can cooperate in a practical application.
