
function read(){
    
    var name=document.getElementById("Name").value;
    console.log(name);
    var rolno=document.getElementById("Rolno").value;
    console.log(rolno);
    var adno=document.getElementById("Adno").value;
    console.log(adno);
    var age=document.getElementById("Age").value;
    console.log(age);
    if(age>=18){
        alert("eligible");
    }
    else{
        alert("not eligible");
    }

    
}
