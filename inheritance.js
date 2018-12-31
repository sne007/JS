var Person5 = function(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
}

Person5.prototype.wonMedal5 = function(name){
	if(name == 'snehith')
		return true;
	return false;
}


// ES5 
var Athlete = function(name, age, job, sport, medals){
	// similar to super() in java
	Person5.call(this, name, age, job);
	this.sport = sport;
	this.medals = medals;
}

// linking athlete prototype to Person's prototype
Athlete.prototype = Object.create(Person5.prototype);

var john = new Athlete('snehith', 23, 'chess', 'chessPlayer', 5);

console.log(john);

// ES6 is actually simpler.

class Athlete6 extends Person5 {
	constructor(name, age, job, sport, medals){
		super(name, age, job);
		this.sport = sport;
		this.medals = medals;
	}

	wonMedal(name){
		if(name == 'snehith')
			return true;
		return false;
	}

}

