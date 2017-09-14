/*===========For==========*/
let domain = [
'google.com',
'unitech.vn',
'unitech.com',
'unitech.jp'
];
console.log("/*===========TH MANG DON GIAN==========*/");
/*===========Case1==========*/
console.log("/*===========Case1 Su dung For ==========*/");
for(let i = 0; i< domain.length; i++){
	console.log(domain[i]);
}

/*===========Case2==========*/
console.log("/*===========Case2 Su dung map ==========*/");
domain.map(function(domain, key){
	console.log(`${domain}`);
});

/*===========Case3==========*/
console.log("/*===========Case3 su dung for in ==========*/");
for (let index in domain) {
	console.log(`${index}: ${domain[index]}`);
};

/*===========Case4==========*/
console.log("/*===========Case4 su dung for of ==========*/");
for (let index of domain) {
	console.log(`print index: ${index}`);
};

/*===========Case5==========*/
console.log("/*===========TH MANG DOI TUONG==========*/");
var domains = [
	{
		domain: 'google.com',
		author: "Google inc"
	},
	{
		domain: 'unitech.vn',
		author: "Unitech inc"
	}
];
console.log("/*===========Case5 su dung for in==========*/");
for (let index in domains) {
	console.log(`domain: ${domains[index].domain}`);
	console.log(`author: ${domains[index].author}`);
}

console.log("/*===========SU DUNG Spread Operator==========*/");
let couseWeb = [
"PHP",
"Zend",
"WordPress"
];
let couseMobile = [
"Adroid",
"iOS"
];

let couse = ["HTML", ...couseWeb, ...couseMobile, "Unity"];

console.log(couse);