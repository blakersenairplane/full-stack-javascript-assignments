let Cat = function(name, color){
  this.name = name;
  this.color = color;
}

export default {
  stringObj: null,
  myString: null,
  myNum: null,
  myDecimal: null,
  myFloat: null,
  myFloat2: null,
  myArrowFn: null,
  myObj: null,
  Cat: Cat,
  Fluffy: new Cat('Fluffy', 'white')
};

/*

1. There are six primitive types being:
- Boolean.  true and fulls 
- null.  Special keyword for a null value
- undefined.  Top level property whose value is undefined
- Number. 42 
- String.  "Howdy pardner"
- Symbol.  
and Object
and Cat because Danny said so!

2. Not totally sure on the default values
3. See variable declarations below
*/

const booleanVariable = false
const nullVariable = null 
const undefinedVariable = undefined
const numberVariable = 42
const stringVariable = "What is shaken bad mamma jamma?"
const symbolVariable = ''
const objectVariable = {
  firstName: Blake,
  lastName: Jensen

}

/*
OBSERVATIONS
1. Types are beneficial so that you know what the value of a variable
should be. 
2. Strings are important because they allow you to output data to users
of your applications
  i. Names, addresses anything really
  ii. They are different vairables
3. Numbers are important to allow for math to be done in applications
  i. Any number 
  ii. Yes you can store decimals
4. Boolean, null, undefined, number, string, symbol and object
5. null, null, undefined, undefined, undefined
6. No, not totally sure how to run the test. 
*/
