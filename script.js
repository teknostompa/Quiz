var svar = [55,8,1,3,2.8,660,120,55,999,4.2,"-"];
var grön = document.getElementById("grön");
grön.style.left="-100%";
function Rätta(element){
    rätt = 0;
    for(var i = 0; i < svar.length; i++){
        var value = document.getElementsByName("fornamn")[i].value;
        if(value == "Ja"){
            value=1;
        }
        if(value == "Nej"){
            value=0;
        }
    if(value == svar[i]){
        rätt++;
    }else{
        console.log(value);
    }
    }
    console.log((rätt/svar.length*100).toFixed(1));
    document.getElementsByClassName("result")[0].innerHTML = rätt + "/" + svar.length + " rätt!";
}

function bakgrund(element){
    var tid = (element.id/svar.length).toFixed(1);
    grön.style.left="calc(" +tid+" * 100% - 100%)";

    //var canvas = document.getElementById("canvas");
    //var ctx = canvas.getContext("2d");
    //ctx.fillStyle = "rgb(152,219,152)";
    //ctx.fillRect(0, 0, canvas.width * tid, canvas.height);
}