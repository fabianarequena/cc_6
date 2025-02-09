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

const calculateBonus = (salary, performanceRating) => {
    let bonus = 0;

    if (performanceRating === "Excellent") {
        bonus = salary * 0.2;
    } else if (performanceRating === "Good") {
        bonus = salary * 0.1;
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05;
    }

    console.log(`Bonus: $${bonus}`);
};

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
