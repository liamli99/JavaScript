'hello'
alert('hello');

// concatenation
'some' + 'text'
'some' + 'more' + 'text'

typeof 2
typeof 'hello'

// type coercion
'hello' + 3
'$' + 20.95 + 7.99
'$' + (20.95 + 7.99)
'$' + (2095 + 799) / 100

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

// double quote string, useful when there exists a single quote inside the string
"hello"
"I'm learning JavaScript"
// include a single quote inside a single quote string using \'
'I\'m learning JavaScript'

// single quote string, useful when there exists a double quote inside the string
'hello'
'I"m learning JavaScript'
// include a double quote inside a double quote string using \""
"I\"m learning JavaScript"

// escape character new-line 
alert('some\ntext');

// tempalte string
`hello`
// Interpolation, cleaner than line 17!
`Items (${1 + 1}): $${(2095 + 799) / 100}`
// multi-line string, same as 'some\ntext'!
`some
text`