// https://supersimple.dev/projects/amazon/checkout

// Basics of Math
2 + 2
10 - 3
10 * 3
10 / 2

2 + 2 + 2
2.2 + 2.2

// 2 socks + 1 basketball
// Items
10.90 * 2 + 20.95
// Items + Shipping & handling
10.90 * 2 + 20.95 + 4.99

// Order of Operations: () > * / > +
1 + 1 * 3
(1 + 1) * 3

// 1 basketball + 2 shirts
// Items
20.95 + 7.99 * 2
// Estimated tax
(20.95 + 7.99 * 2) * 0.1

// Inaccuracy with floats
0.1 + 0.2

// 1 basketball + 1 shirt
// Items, inaccurate!
20.95 + 7.99
// Correctly calculate Items
(2095 + 799) / 100

// Items (cost of items before shipping and taxes): (price1 * 100 * num1 + price2 * 100 * num2 + ...) / 100

// Round number to nearest integer
Math.round(2.2)
Math.round(2.8)

// 1 basketball + 1 shirt
// Estimated tax, more than 2 decimal places!
((2095 + 799) * 0.1) / 100
// Correctly calculate tax to keep 2 decimal places
Math.round((2095 + 799) * 0.1) / 100

// Tax (10%): Math.round((price1 * 100 * num1 + price2 * 100 * num2 + ... + shipping * 100) * 0.1) / 100