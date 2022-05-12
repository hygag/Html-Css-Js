var fk = document.getElementById("fk");
var creatDiv = document.getElementById("creatDiv");
var btn = document.getElementById("btn");

//alert(fk);
btn.onclick = function(){
    creatDiv.innerHTML = null;
    //msort.onclick  = null;
    for(var i = 0; i < fk.value; i ++){
        
        //alert(i);
        var div = document.createElement("div");
        
        var val = prompt("输入第" + (i + 1) + "个数");
        //alert(val);
        while(val == 0 || (val >= 'a' && val <= 'z') || (val >= 'A' && val <= 'Z') ) 
        val = prompt("由于输入的值不合法请重新输入第" + (i + 1) + "个数");

        div.style.width = "20px";
        div.style.height = val * 20 + "px";
        
        div.style.backgroundColor = "cadetblue";
        
        div.innerHTML = val;
        
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "flex-end";
        div.style.left = i * 50 + "px" ;
        div.style.fontSize = "auto";
        //div.style.position = "absolute";
        div.style.transition = "background-color 0.2s";
        div.style.marginLeft = "5px";
        div.style.marginRight = "5px";
        
        
        
        // creatDiv.style.display = "flex";
        // creatDiv.style.justifyContent = "center";
        // creatDiv.style.alignItems = "flex-end";
        // creatDiv.style.marginTop = "60px";

        creatDiv.appendChild(div);
    }



}

