# Project: Decoder Ring

## Table of Contents
* [General Information](#general-information)
* [Technologies](#technologies)
* [Functions](#functions)
* [Screenshot](#screenshot)

## General Information
The decoder ring application was created to help encode and decode messages. I was tasked with building the functions and tests for the application that will encode or decode a string using a variety of ciphers.  For each cipher, I made a series of tests using mocha and chai to confirm the ciphers were working as expected. The project goals included the following checklist:  

[ ] Complete the caesar() function.  
[ ] Write tests for the caesar() function.  
[ ] Complete the polybius() function.  
[ ] Write tests for the polybius() function.  
[ ] Complete the substitution() function.  
[ ] Write tests for the substitution() function.  

## Technologies
This web page is created with:
* HTML
* Bootstrap
* JavaScript

## Functions

### Caesar Shift

The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

#### caesar()

The `caesar()` function in the `src/caesar.js` file has three parameters:

* input refers to the inputted text to be encoded or decoded.
* shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
* encode refers to whether you should encode or decode the message. By default it is set to true.

When building the function, the following constraints and rules were considered:

* If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
* Spaces should be maintained throughout, as should other non-alphabetic symbols.
* Capital letters can be ignored.
* If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

##### Examples

`caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'`

`caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'`

### Polybius Square

The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

#### polybius()
The `polybius()` function in the `src/polybius.js` file has two parameters:

* input refers to the inputted text to be encoded or decoded.
* encode refers to whether you should encode or decode the message. By default it is set to true.

When building the function, the following constraints and rules were considered:

* No additional symbols will be included as part of the input. Only spaces and letters will be included.
* When encoding, output should still be a string.
* When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
* Spaces should be maintained throughout.
* Capital letters can be ignored.
* The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
* 
##### Examples

`polybius("Hello world"); //> '3251131343 2543241341'`

### Substitution Cipher

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".

This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

#### substitution()

The `substitution()` function in the `src/substitution.js` file has three parameters:

* input refers to the inputted text to be encoded or decoded.
* alphabet refers to substitution alphabet.
* encode refers to whether you should encode or decode the message. By default it is set to true.

When building the function, the following constraints and rules were considered:

* The input could include spaces and letters as well as special characters such as #, $, *, etc.
* Spaces should be maintained throughout.
* Capital letters can be ignored.
* The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
* All the characters in the alphabet parameter must be unique. Otherwise, it should return false.

##### Examples

`substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'`

`substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"`

`substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"`

## Screenshots
![project-decoder-ring_](https://user-images.githubusercontent.com/68755319/131982221-7a445a02-3ee2-4521-a6fa-09778eacedbb.png)
