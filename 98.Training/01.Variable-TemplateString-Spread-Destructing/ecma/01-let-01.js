/*
Let & Var
*/
var name = "AnhTran";

function togglelink(){
    if(name ="AnhTran"){
        let a = "Let name";
         document.getElementById("id1").innerHTML = "";
         document.getElementById("id1").innerHTML ="<p class='info'>show "+a+" now!</p>";
         console.log(a);
    }
    console.log(name);
    console.log(a);
}