// https://supersimple.dev/projects/amazon/checkout

'hello'
alert('hello');

// Concatenation
'some' + 'text'
'some' + 'more' + 'text'

// Data type
typeof 2
typeof 'hello'

// Type coercion
'hello' + 3 + 4
'25' + 5
'25' - 5

// 1 basketball + 1 shirt
// Items
// Inaccurate, concatenate 20.95 and 7.99!
'$' + 20.95 + 7.99
// Inaccurate, calculate the floats!
'$' + (20.95 + 7.99)
// Accurate
'$' + (2095 + 799) / 100

// Write entire line of Items using concatenation
'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

// Ways to create a string
// 1. Single quote, this is recommended and used by default!
'hello'
// Useful when there exists double quote inside the string
'I"m learning JavaScript'
// We can still include double quote inside double quote string by using escape character \"
"I\"m learning JavaScript"

// 2. Double quote
"hello"
// Useful when there exists single quote inside the string
"I'm learning JavaScript"
// We can still include single quote inside single quote string by using escape character \'
'I\'m learning JavaScript'

// Escape character \n (newline) 
alert('some\ntext');

// 3. Backticks, also called tempalte string
`hello`
// Feature 1: Interpolation (insert value directly into a string using ${})
// Rewrite entire line of Items using interpolation, much cleaner!
`Items (${1 + 1}): $${(2095 + 799) / 100}`

// Feature 2: Multi-line string (allow a string with multiple lines)
// This is the same as 'some\ntext'!
`some
text`