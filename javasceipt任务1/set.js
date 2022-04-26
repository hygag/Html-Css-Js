
window.onload = function(){
    // alert(selects[0].name);
    var Pro = document.getElementById("province");
    var City = document.getElementById("city");
    var Town = document.getElementById("town");
    getPro();
// 获取省份

    function getPro(){
        
        for(var i = 0; i < 31; i ++){
            var option = document.createElement("option");           
            option.innerHTML = region[i].item_name;
            option.value = region[i].item_code         
            Pro.appendChild(option);         
        }
        
        Pro.onchange = function(){
            getCity(this.value);
        }
    };
    
    //获取城市
    function getCity(val){
        // alert(val);

        City.length = 1;
        Town.length = 1;
        for(var i = 31; i < 367; i ++){
            if(cmp(val, region[i].item_code,2)){
                var option = document.createElement("option");           
                option.innerHTML = region[i].item_name;
                option.value = region[i].item_code         
                City.appendChild(option); 
            }
            
        }

        City.onchange = function(){
            getTown(this.value);
        }
    }; 
    
    // 获取城镇
    function getTown(val){
        Town.length = 1;

        for(var i = 367; i < 400 + 2844; i ++){
            if(cmp(val, region[i].item_code,4)){
                var option = document.createElement("option");           
                option.innerHTML = region[i].item_name;
                option.value = region[i].item_code         
                Town.appendChild(option); 
            }
            
        }
    };

    //比较函数
    function cmp(val, region_code, num){
        for(var i = 0; i < num; i ++){
            if(val[i] != region_code[i])
            return false;
        }
        return true;
    }
}
   


   


// 0-31
// 31 - 367
// 367 - 400 + 2844