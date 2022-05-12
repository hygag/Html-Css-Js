

var divs  = creatDiv.getElementsByTagName("div");

// var msort = document.getElementById("msort");
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
          msort_setColor(j, j+1, i);
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
            }, 500);
            
            clearInterval(timer)
          //console.log('排序完毕')
        }
      },1000)

      
    }

 
function csort(){
    //alert("aa");
    var arr = new Array();
      for(var i = 0; i < divs.length; i ++){
          arr[i] = divs[i].innerHTML;
        //alert(num[i]);
      }
    //alert("a");
    var i = 0, j = 1, jpos = i;
    //var min = arr[0];

    var timer = setInterval(() => {
      if(i !==  arr.length - 1){
        
        if(j !== arr.length){
          
          if(arr[jpos] > arr[j]){ 
            
            jpos = j;
            //alert("xiao");
          }
          j = j + 1;
          csort_setColor(jpos, i, j);
          //alert(i + " " + j);
        }
        else{
          
          if(jpos != i){
            
            var t = arr[i];
            arr[i] = arr[jpos];
            arr[jpos] = t;

            change(jpos, i);
            //divs[i].style.backgroundColor = "green";
            //alert("change");
          }
          
          i = i + 1;
          jpos = i;
          min = arr[i];
          j = i;
        }    
      }
      else{
        for(var l = 0; l < divs.length; l ++) divs[l].style.backgroundColor = "green";
        clearInterval(timer)
        
        setTimeout(() => {
          alert("排序完毕！！");
      }, 500);
      
        
      }
    }, 1000);

}



function hsort(){
  alert("hhh");
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

function msort_setColor(i, j, k){
    for(var l = 0; l < divs.length - k; l ++){
        divs[l].style.backgroundColor = "cadetblue";
    }
    for(var l = divs.length - k; l < divs.length; l ++){
        divs[l].style.backgroundColor = "green";
    }
    divs[i].style.backgroundColor = "blue";
    divs[j].style.backgroundColor = "blue";
}

function csort_setColor(jpos, i, j){
 
  for(var l = 0; l < divs.length; l ++) divs[l].style.backgroundColor = "cadetblue";
  
  for(var l = 0; l < i; l ++) divs[l].style.backgroundColor = "green";
  
  if(jpos !== i) divs[jpos].style.backgroundColor = "red";
  divs[i].style.backgroundColor = "yellow";
  divs[j].style.backgroundColor = "blue";
  //for(var l = i; l < divs; l ++) if(l != jpos) divs[l].style.backgroundColor = "cadetblue";
}
