/*===========Function ==========*/
console.log("/*===========Functiopn Default Parameters==========*/");
console.log("/*===========ES5==========*/");
function ES5(domain){
	domain = domain || "unitech";
	return domain;
}



console.log(`Khong truyen tham so ES5:${ES5()}`);
console.log(`Co truyen tham so ES5:${ES5("Say Cheer ES5")}`);
console.log("/*===========ES6==========*/");

function ES6(domain = "unitech"){
	return domain;
}
console.log(`Khong truyen tham so ES6:${ES6()}`);
console.log(`Co truyen tham so ES5:${ES6("Say Cheer ES6")}`);