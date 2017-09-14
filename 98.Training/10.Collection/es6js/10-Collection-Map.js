/*===========Function ==========*/
console.log("/*===========10-Collection==========*/");
console.log("/*===========Collection MAP==========*/");

let number = new Map(
[
	["Name", "Nguyen Van A"],
	["Email", "Abc@gmail.com"],
	["Website", "abc.com"]
]
)
/*1. KHOI TAO*/
console.log("KHOI TAO");
console.log(number);
/*2. ADD ITEM*/
console.log("ADD ITEM");
number.set("Id", 1234);
console.log(number);
/*3. DELETE ITEM*/
console.log("DELETE ITEM");
number.delete("Name");
console.log(number);
/*4. ITEM HAVE BEEN EXIT*/
console.log("ITEM HAVE BEEN EXIT : " +  number.has("Website"));

/*Count*/
console.log("Count : "+ number.size);

/*5. CLEAR ALL ITEMS*/
/*numbers.clear();*/
console.log("CLEAR ALL ITEMS : "+"numbers.clear()");

/*6. GET LIST KEYS*/
for(let key of number.keys()){
	console.log("Gia tri key la: "+key);
}
/*7. GET LIST VALUE*/
for(let value of number.values()){
	console.log("Gia tri Value la: "+value);
}

/*8. GET LIST VALUE*/
for(let entry of number.entries()){
	console.log("Gia tri Key la: "+entry[0]);
	console.log("Gia tri Value la: "+entry[1]);
}
/*9. Print array*/
/*9 =========== For of========*/
for(let [key, value] of number){
	console.log(`For of cua key la ${key} -- ${value}`);
}

/*9 =========== ForEach========*/
number.forEach((key, value) => {
	console.log(`ForEach cua key la ${key} -- ${value}`);
})
//
/*7. Mapping và filtering*/