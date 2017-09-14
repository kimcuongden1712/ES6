/*Template String duoc dat trong cap dau huyen vs ky tu ${}*/
var templateString = "Unitech";
console.log(`wellcome to ${templateString}`);
/*Lap va gan bien*/
/*1. Truong hop mang don gian*/
var domain = [
'google.com',
'unitech.vn',
'unitech.com',
'unitech.jp'
];

//loop using map
domain.map(function(domain, key){
	console.log(`${domain}`);
});

/*2. Truong hop mang doi tuong*/
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

domains.map(function(domains, key){
	console.log(`${domains.domain}`);
	console.log(`${domains.author}`);
	console.log("=================");
});

/*3.tham so dieu kien*/
let elm = document.getElementById("mycontent");
let todo ={
		id : 89,
		status : true,
		name : "Play football"
};

elm.innerHTML = `<div id="todo-id-${todo.id}">
	<i class="${todo.status == true ? "hidden" : ""} glyphicon glyphicon-ok"></i>
	<span class="name">${todo.name}</span>
</div>`;