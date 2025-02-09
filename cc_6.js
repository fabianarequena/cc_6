// Task 1: Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

// Created formula to calculate profit given 3 parameters


// Task 2: Sales Tax Computation

function calculateSalesTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Sales Tax: $${tax}`);

};

calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"

// Created a function with two parameters to calculate salex tax


// Task 3: Employee Bonus Calculation

const calculateBonus = (salary, performanceRating) => 
    performanceRating === "Excellent" ? salary * 0.2 :
    performanceRating === "Good" ? salary * 0.1 :
    performanceRating === "Average" ? salary * 0.05 :
    0;

console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`); // "Bonus: $1000"
console.log(`Bonus: $${calculateBonus(7000, "Good")}`); // "Bonus: $700"

calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"

// Calculated bonus based on performance ratings and percentages



// Task 4: Subscription Pricing Model

function calculateSubscriptionCost(plan, months, discount = 0) {
    let prices = { "Basic": 10, "Premium": 20, "Enterprise": 50 };
    let totalCost = (prices[plan] * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
}

calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"

// Created a function with 3 parameters  to calculate a reocurring cost with different package options


// Task 5: Currency Conversion

function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
}

convertCurrency(100, 1.1); // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85); // Expected output: "Converted Amount: $212.50"

// Created a function to convert currency given two parameters 


// Task 6: Higher-Order Function for Bulk Orders

let orders = [200, 600, 1200, 450, 800];

function applyBulkDiscount(orders, discountFunction) {
    let discountedOrders = orders.map(discountFunction);
    console.log(discountedOrders);
}

applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
// Expected output: [200, 540, 1080, 450, 720]

// Created a high-order function that applies a 10% discount given that the price is over a certain $ value


// Task 7: Business Exepnse Tracker

function createExpenseTracker() {
    let totalExpenses = 0;
    return function(amount) {
        totalExpenses += amount;
        console.log(`Total Expenses: $${totalExpenses}`);
    };
}

let tracker = createExpenseTracker();
tracker(200); // Expected output: "Total Expenses: $200"
tracker(150); // Expected output: "Total Expenses: $350"

// Created an expense tracker which is a function that returns another function to add expenses and has a running total 


// Task 8: Employee Promotion Evaluation

function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return 0;
    }
    return 2 + calculateYearsToPromotion(employeeLevel + 1);
}

console.log(`Years to Level 10: ${calculateYearsToPromotion(7)}`); // "Years to Level 10: 6"
console.log(`Years to Level 10: ${calculateYearsToPromotion(5)}`); // "Years to Level 10: 10"

// Created function to calculate years to promotion level 10 and that if already level 10, no years needed