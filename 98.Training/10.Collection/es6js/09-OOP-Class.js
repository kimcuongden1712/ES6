/*===========Function ==========*/
console.log("/*===========OOP==========*/");
console.log("/*===========Class==========*/");
class Student {
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

let StudentObj = new Student("SV0012", "Join", 1992);

console.log(StudentObj);
console.log(StudentObj.showInfo());