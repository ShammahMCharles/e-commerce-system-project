/**
 * Error Handling Utility:

Error Handler Module (errorHandler.ts):
Implement a custom error class and functions to 
handle different types of errors gracefully.
 */

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "Validation Error"
    }
}

export class PaymentError extends Error {
    constructor(message: string) {
        super(message)
        this.name = "Payment Error"
    }
}

export function handleError(error: unknown):void {
    if (error instanceof ValidationError) {
        console.error(`Validation Error: ${error.message}`)
    } else if (error instanceof PaymentError) {
        console.error("Payment problem:", error.message);
    } else {
    console.error("Unknown error:", error);
  }
}