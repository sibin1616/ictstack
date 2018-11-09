
function read(){
    
    var name=document.getElementById("Name").value;
    console.log(name);
    var rolno=document.getElementById("Rolno").value;
    console.log(rolno);
    var adno=document.getElementById("Adno").value;
    console.log(adno);
    var age=document.getElementById("Age").value;
    console.log(age);
    
    var dist=((document.getElementById("district")).options[(document.getElementById("district")).selectedIndex]).value;
    console.log(dist);
    if(age>=18){
        alert("eligible");
    }
    else{
        alert("not eligible");
    }

    
}
function add(){
    var a=parseInt(document.getElementById("op1").value);
    var b=parseInt(document.getElementById("op2").value);
    var c=a+b;
   alert(c);
    
}


function get(){
    var a=parseInt(document.getElementById("op1").value);
    var b=parseInt(document.getElementById("op2").value);
    var o=document.getElementById("op");
    var op=(o.options[o.selectedIndex]).value;
    if(op=="+"){
        var c=a+b;
        
    }
    else if(op=="-"){
        var c=a-b;
        
    }
    else if(op=="*"){
        var c=a*b;
        
    }
    else{
        if(a==0)
        {
            var c="not possible";
        }
        else{
        var c=a/b;
        
    }
    }
document.getElementById("result").innerHTML="<div class='text-light bg-dark'><b>Result is "+c+"</b></div>";
}

function checkl(){
    var a=document.getElementById("op1").value;
    var b=document.getElementById("op2").value;
    var c=document.getElementById("op3").value;
    if(a>b){
        if(a>c){
     var res=a;
        }
        else{
          var  res=c;
        }
    }
       
    else if(b>c){
       var res=b;
    }
    else{
        var res=c;
    }
    document.getElementById("result").innerHTML="<div class='text-light bg-dark'><b>Largest is "+res+"</b></div>";

}

function checks(){
    var a=document.getElementById("op1").value;
    var b=document.getElementById("op2").value;
    var c=document.getElementById("op3").value;
    var res;
    if(a<b){
        if(a<c){
      res=a;
        }
        else{
            res=c;
        }
    }
       
    else{
        res=b;
    }
    document.getElementById("result").innerHTML="<div class='text-light bg-dark'><b>smallest is "+res+"</b></div>";

}
