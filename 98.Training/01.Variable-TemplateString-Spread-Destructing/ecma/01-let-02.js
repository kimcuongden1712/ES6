function drawShape() {
    document.getElementById("contentShap").innerHTML="";
    var content = document.getElementById("contentShap")
    for (let i = 0; i < 5; i++) {
        var elmp = document.createElement("p");
        elmp.innerHTML=i;
        content.appendChild(elmp);
        elmp.onclick = function(){
            alert("Number is "+ i);
        }
    }
}

/*=================TH su dung VAR thi gia tri tra ve la i+1==============*/
/*function drawShape() {
    document.getElementById("contentShap").innerHTML="";
    var content = document.getElementById("contentShap")
    for (var i = 0; i < 5; i++) {
        var elmp = document.createElement("p");
        elmp.innerHTML=i;
        content.appendChild(elmp);
        elmp.onclick = function(){
            alert("Number is "+ i);
        }
    }
}
*/

function clearShape() {
    document.getElementById("contentShap").innerHTML="";
}