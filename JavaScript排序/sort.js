

var divs  = creatDiv.getElementsByTagName("div");

//var msort = document.getElementById("msort");
// var hsort = document.getElementById("hsort");
// var csort = document.getElementById("csort");

function msort(){
    //msort.onclick  = null;
    var arr = new Array();
    for(var i = 0; i < divs.length; i ++){
        arr[i] = divs[i].innerHTML;
       //alert(num[i]);
    }
    
    
    var i = 0, j = 0;
    let timer = setInterval(() => {
        if(i !== arr.length - 1){
            setColor(j, j+1, i);
          if(j !== arr.length - 1 - i && arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            
            change(j,j+1);   
            // setColor(j, j+1, i);
          }
          if(++j == arr.length - 1 - i){   
            i++;
            j = 0;
          }
          if(j < arr.length - 1){
            setTimeout(() => {
            // setColor(j, j+1, i);  
            },900)
          }
        }else{
            for(var l = 0; l < divs.length; l ++){
                divs[l].style.backgroundColor = "green";
            }
            setTimeout(() => {
                alert("排序完毕！！");
            }, 2000);
            
            clearInterval(timer)
          //console.log('排序完毕')
        }
      },1000)

      
    }






function change(i, j){
    
    // divs[i].style.backgroundColor = "blue";
    // divs[j].style.backgroundColor = "blue";
    var t = divs[i].innerHTML;
    divs[i].innerHTML = divs[j].innerHTML;
    divs[j].innerHTML = t;
    
    divs[i].style.height = divs[i].innerHTML * 20 + "px";
    divs[j].style.height = divs[j].innerHTML * 20 + "px";

    
}

function setColor(i, j, k){
    for(var l = 0; l < divs.length - k; l ++){
        divs[l].style.backgroundColor = "cadetblue";
    }
    for(var l = divs.length - k; l < divs.length; l ++){
        divs[l].style.backgroundColor = "green";
    }
    divs[i].style.backgroundColor = "blue";
    divs[j].style.backgroundColor = "blue";
}


function sort(){

}

sort.onclick = function(){
    
}