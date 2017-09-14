/*===========Function ==========*/
console.log("/*===========Arrow Function==========*/");
function Func01(name, age){
	return `My name is ${name}, ${age}`;
};

Func01("AnhTT01", 12);

var Func02 = function(name, age){
	return `My name is ${name}, ${age}`;
}

let Func03 = (name, age) =>{
	return `My name is ${name}, ${age}`;
}

let Func04 = name => {
	return `My name is ${name}`;
}
console.log(Func02("AnhTT02", 12));

console.log(Func03("AnhTT03", 12));

console.log(Func04("AnhTT04"));


var course = [
	"adroid",
	"java",
	"php"
];

console.log(
	course.map((course,key) =>{
		return course.toUpperCase();
	})
);


let score = [9,2,4,7,6,2,1,0];

score.sort((x,y) => x>y ? true :false);

console.log(score);