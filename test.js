/**
// Javascript is prototype based language so no Class keyword 
// has been used to declare a class like in other languages e.g. C++,PHP, JAVA etc.

// THE CLASS 
function Person() {
	alert("Object created");
}


// THE OBJECT ( CLASS INSTANCE )

// creation of Object Method 1:
//syntax : var objectName = new ClassName();

var person1 = new Person();
var person2 = new Person();

// creation of Object Method 2:
//syntax : Object.create(proto [, propertiesObject ])
var person1 = Object.create(Person.prototype);

// CONSTRUCTOR 
var person3 = new Person();

// PROPERTY (OBJECTS ATTRIBUTES)

function Person(gender) {
  this.gender = gender;
  alert('Person instantiated');
}

var person1 = new Person('Male');
var person2 = new Person('Female');

//display the person1 gender
alert('person1 is a ' + person1.gender); // person1 is a Male


// THE METHODS
function Person(gender) {
  this.gender = gender;
  alert('Person instantiated');
}

Person.prototype.sayHello = function()
{
  alert ('hello');
};

var person1 = new Person('Male');
var person2 = new Person('Female');

// call the Person sayHello method.
person1.sayHello(); // hello



*
*
*/