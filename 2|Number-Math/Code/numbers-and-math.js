// Basics of Math:
2 + 2
10 - 3
10 * 3
10 / 2

2 + 2 + 2
2.2 + 2.2

10.90 * 2 + 20.95
10.90 * 2 + 20.95 + 4.99

// Order of operations:
1 + 1 * 3
(1 + 1) * 3

20.95 + 7.99 * 2
36.93 * 0.1
(20.95 + 7.99 * 2) * 0.1

// Inaccuracies with Floats:
0.1 + 0.2
20.95 + 7.99
// Solve the issue when calculating money
(2095 + 799) / 100

// How to round numbers:
Math.round(2.2)
Math.round(2.8)

// This is wrong when calculating tax
((2095 + 799) * 0.1) / 100
// How to correctly calculate the tax and keep two decimal places!
Math.round((2095 + 799) * 0.1) / 100