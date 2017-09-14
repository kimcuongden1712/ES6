/*===========Function ==========*/
console.log("/*===========Enhanced==========*/");
console.log("/*===========Property value shorthhand==========*/");
function getCouse(name, price, free){
	return {
		name,
		price,
		free
	}
}

console.log(getCouse("android", 100, false));
console.log("/*===========Method Property==========*/");
function getCouse1(name, price, free){
	return {
		name,
		price,
		free,
		showInfor1(){
			console.log(`${name} - ${price} - ${free}`);
		},
		showInfor2:function(){
			console.log(`${name} - ${price} - ${free}`);
		},
		showInfor3:function(delimiter = "-"){
			console.log(`${name} ${delimiter} ${price} - ${free}`);
		},
		

	}
}
var myCouse = getCouse1("PHP", 100, false);
myCouse.showInfor1();
myCouse.showInfor3("==============");
console.log(myCouse);

console.log("/*===========Computed Property Names==========*/");
let propPrefix = "support_";
let bootstrapSupport = {
	[propPrefix + "chrome"]:true,
	[propPrefix + "ie"]:true,
	[propPrefix + "firefox"]:false
}


console.log(bootstrapSupport);
