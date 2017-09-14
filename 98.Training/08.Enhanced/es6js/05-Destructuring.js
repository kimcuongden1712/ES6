/*===========Destructuring Assignments==========*/
console.log("/*===========TH Array don gian==========*/");
let domain = [
'google.com',
'unitech.vn',
'unitech.com',
'unitech.jp'
];

let [g,univi, uniglobal, unijp] = domain;

console.log(`g: ${g}`);
console.log(`JP: ${unijp}`);


console.log("/*===========TH Array Object==========*/");

let domains = [
	{
		domain : "google",
		author : "Google Inc"
	},
	{
		domain : "Unitech",
		author : "Untech Inc"
	}
];

let [{
	domain : d,
	author : a,
	serial : c = "Admin"
}] = domains


console.log(`domain: ${d}`);
console.log(`author: ${a}`);

console.log(`defaul value: ${c}`);