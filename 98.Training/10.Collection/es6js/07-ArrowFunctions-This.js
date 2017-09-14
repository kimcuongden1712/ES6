/*===========Function ==========*/
console.log("/*===========Arrow Function THIS==========*/");
console.log("/*===========ERROR==========*/");
/*let student = {
	name: "Join",
	courses: ["androi", "php", "java"],
	showInfo: function(){
		this.courses.forEach(function(courses){
			console.log(`${name} study ${courses}`);
		})
	}
}*/


console.log("/*===========02 _this==========*/");
/*let student = {
	name: "Join",
	courses: ["androi", "php", "java"],
	showInfo: function(){
		var _this = this;
		this.courses.forEach(function(courses){
			console.log(`${_this.name} study ${courses}`);
		})
	}
}*/
//join study android
//join study java
console.log("/*===========03 bind==========*/");
/*let student = {
	name: "Join",
	courses: ["androi", "php", "java"],
	showInfo: function(){
		this.courses.forEach(function(courses){
			console.log(`${this.name} study ${courses}`);
		}.bind(this))
	}
}*/

console.log("/*===========04 Arrow function==========*/");
let student = {
	name: "Join",
	courses: ["androi", "php", "java"],
	showInfo: function(){
		this.courses.forEach(courses => console.log(`${this.name} study ${courses}`))
	}
}
student.showInfo();
