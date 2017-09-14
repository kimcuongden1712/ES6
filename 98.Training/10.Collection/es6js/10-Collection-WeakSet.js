/*===========Function ==========*/
console.log("/*===========10-Collection==========*/");
console.log("/*===========Collection SET==========*/");

let number = new Set([5,0,9,34]);
/*1. KHOI TAO*/
console.log("KHOI TAO");
for (let index of number) {
	console.log(`${index}`);
}

/*2. ADD ITEM*/
number.add("aa");
console.log("ADD ITEM");
for (let index of number) {
	console.log(`${index}`);
}

/*3. DELETE ITEM*/
number.delete(34);
console.log("DELETE ITEM");
for (let index of number) {
	console.log(`${index}`);
}

/*4. ITEM HAVE BEEN EXIT*/
console.log("ITEM HAVE BEEN EXIT : "+number.has(1));

/*Count*/
console.log("Count : "+number.size);

/*5. CLEAR ALL ITEMS*/
/*numbers.clear();*/
console.log("CLEAR ALL ITEMS : "+"numbers.clear()");

/*6. CONVERT SET TO ARRAY*/

let arr_numbers = [...number];
//Print array
arr_numbers.map(function(arr_numbers, key){
	console.log(`Print Array ${arr_numbers}`);
});

//
arr_numbers.forEach(arr_numbers=> console.log(`Print Array using Arrow Fucntion ${arr_numbers}`))

/*7. Mapping và filtering*/
let set = new Set([1, 2, 3]);
let arr = [...set].map(function(x){
    return x * 2;
});

for (let index of arr) {
	console.log(`Mapping : ${index}`);
}

arr =  [...set].filter(function(x){
    return x * 2;
});

for (let index of arr) {
	console.log(`filtering : ${index}`);
}