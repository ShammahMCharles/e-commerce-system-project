import { Product, type ApiProduct } from "./models/Products";
import { calculateDiscount } from "./utils/discountCalculator";
import { fetchProducts } from "./services/apiService";
import { handleError } from "./utils/errorHandler";
import { calculateTax } from "./utils/taxCalculator";

const productContainer = document.querySelector("#product-container")


function createProductCard(product: Product): string {
  const discount = calculateDiscount(product);
  const tax = calculateTax(product);

  return `
    <div class="bg-white rounded-xl shadow-md p-5">

      <img
        src="${product.thumbnail}"
        alt="${product.title}"
        class="w-full h-48 object-cover rounded-lg"
      />

      <h2 class="text-xl font-bold mt-4">
        ${product.title}
      </h2>

      <p class="text-gray-600 mt-2">
        Category: ${product.category}
      </p>

      <p class="text-lg font-semibold mt-2">
        Price: $${product.basePrice.toFixed(2)}
      </p>

      <p class="text-green-600">
        Discount: $${discount.toFixed(2)}
      </p>

      <p class="text-gray-600">
        Tax: $${tax.toFixed(2)}
      </p>

      <button
        class="details-button mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        data-id="${product.id}"
      >
        View Details
      </button>

    </div>
  `;
}



async function main() {
    try {
        const data = await fetchProducts()

        const products = data.map(
            (item: ApiProduct) => new Product(item)
        )

        for (const product of products) {
            product.displayDetails()

            const tax = calculateTax(product)
            const discount = calculateDiscount(product)

            console.log(`Tax: $${tax}`)
            console.log(`Discount: $${discount}`)

            productContainer?.insertAdjacentHTML(
            "beforeend",
            createProductCard(product)
            )
        }

        const buttons = document.querySelectorAll(".details-button");

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const id = Number(button.getAttribute("data-id"));

                const product = products.find(
                    product => product.id === id
                );

                if (product) {
                    alert(`
                        ${product.title}

                        Price: $${product.basePrice.toFixed(2)}
                        Discount: $${calculateDiscount(product).toFixed(2)}
                        Tax: $${calculateTax(product).toFixed(2)}
                    `);
                }
            });
        });

    } catch (error) {
        handleError(error)
    }
}

main()
