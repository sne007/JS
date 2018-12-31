var a = [1,12,3,4];

// apply takes second argument as an array
// some classes have only one method. apply or call.
console.log(Math.max.apply(Math, a));


// call

var obj = {
	firstName : 'snehith',
	lastName : 'Reddy',
	age : function(dob){
		return 2018 - dob;
	}
};


var person = {
	firstName : 'lol',
	lastName : 'lol1',
	dob : 1997

};

// this is call method. from second, everything are optional.
// We can also use this keyword when we choose not to pass any parameters and use only the variables present inside the
// newly created object

console.log(obj.age.call(person, 1997));
