/*===========Function ==========*/
console.log("/*===========OOP==========*/");
console.log("/*===========Inheritance==========*/");

class Person {
	constructor (code, name, age){
		this.code = code;
		this.name = name;
		this.age = age;
	}

	showInfo(){
		console.log(`${this.name} - ${this.code} - ${this.getAge()}`);
	}

	getAge(){
		let today = new Date();
		let year = today.getFullYear();
		return  year - this.age;
	}
}

class Student1 extends Person {
	constructor (code, name, age, score){
		super(code, name, age);
		this.score = score;
	}
	showInfo(){
		super.showInfo();
		console.log(`Score :  ${this.score}`);
	}
}


let StudentObj1 = new Student1("SV0012", "Join", 1992, 10);

console.log(StudentObj1);
console.log(StudentObj1.showInfo());