/*===========Function ==========*/
console.log("/*===========Functiopn Rest Parameters==========*/");
let ES6 = (param1, param2, ...other) => {
	console.log(other);
}
ES6("unitech", "google", 1);