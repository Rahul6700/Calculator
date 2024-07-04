const diplay=document.getElementById("display");

document.getElementById("b0").addEventListener("click",function(){display.value+="0";});
document.getElementById("b1").addEventListener("click",function(){display.value+="1";});
document.getElementById("b2").addEventListener("click",function(){display.value+="2";});
document.getElementById("b3").addEventListener("click",function(){display.value+="3";});
document.getElementById("b4").addEventListener("click",function(){display.value+="4";});
document.getElementById("b5").addEventListener("click",function(){display.value+="5";});
document.getElementById("b6").addEventListener("click",function(){display.value+="6";});
document.getElementById("b7").addEventListener("click",function(){display.value+="7";});
document.getElementById("b8").addEventListener("click",function(){display.value+="8";});
document.getElementById("b9").addEventListener("click",function(){display.value+="9";});
document.getElementById("b+").addEventListener("click",function(){display.value+="+";});
document.getElementById("b-").addEventListener("click",function(){display.value+="-";});
document.getElementById("bx").addEventListener("click",function(){display.value+="*";});
document.getElementById("b/").addEventListener("click",function(){display.value+="/";});
document.getElementById("b%").addEventListener("click",function(){display.value+="%";});
document.getElementById("bpow").addEventListener("click",function(){display.value +="**";});

document.getElementById("bb").addEventListener("click",function(){display.value="";});

document.getElementById("be").addEventListener("click",calc);


function calc(){
    display.value = eval(display.value);
}
