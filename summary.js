// summary of ARRAY-----

//Firstly, this is the system to write multi elements-it is called array
var destinations = ['sajek', 'coxesbazar', 'nepal', 'bali', 'sp']

// Secondely, the value of index ('sajek', 'coxesbazar', 'nepal', 'bali', 'sp') of array will start from Zero '0' such as sajek er index holo '0' than 1,2 and further..

//Thridly, if i want to read any index in the array-need to wrtie like this 
console.log(destinations[1])

// Fouthly if i want set a value for the index--need to write like this..
destinations[2] = 'thailand'

// if i want to find the position of the index in the array-- var index(this is a name, i can set another name aswell)
var index = destinations.indexOf('bali')

// Fifthly-how to find the array lenght 
console.log(destinations.length);

// want to add new element in the array--
destinations.push('butan')

// want to remove one of the element from the array--use pop to get rid of the last element
destinations.pop()

// conditionals
/*
* <--less than
* >--greater than
* == -- equal to
* != -- not equals to
* <= -- less than equal to
* >= -- greater than equal to
*  in term of several condition which need to fulfill--- need to use && (and)
* in term of several condition where one of them need to fulfill--- ||
**/ 