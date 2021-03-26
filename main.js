function calculate(button){
    var screen = document.getElementById("screen");
    var temp = document.getElementById('temp');
    var sign = document.getElementById('sign');
    var id  = button.id;
    var total = 0
    var numbutton = ['%', '.', "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if(numbutton.indexOf(id) > -1 && !(screen.value.includes("%"))){
        if((screen.value[0] == "0" && screen.value[1] != ".") && id != "."){
            screen.value = "";
            // sign.value = ""
        }

        if(sign.value == 'erase') {
            screen.value = ""
            sign.value = "";
        }
        
        if(screen.value.includes(".") && id != "."){
            screen.value += id;
        }

        if(!screen.value.includes(".")){
            if((id == "." || id == "%") && (screen.value == "" || screen.value == "0")){
                screen.value = "0";
            }
            screen.value += id;
        }

    }

    if(id == "AC"){
        screen.value = "0";
        temp.value = "";
        sign.value = ""
    }

    if(id == "C"){
        var ln = screen.value.length;
        screen.value = screen.value.slice(0, ln-1)
        if(screen.value == "" || sign.value == "erase"){
            screen.value = "0"
        }
    }

    if (id == "+" || id == "-" || id == "*" || id == "/" || id == "="){
        if(screen.value.includes("%")){
            screen.value = screen.value.slice(0, -1);
            screen.value = parseFloat(screen.value) / 100;
        }
        
        if(temp.value.includes("%")){
            temp.value = temp.value.slice(0, -1);
            temp.value = parseFloat(temp.value) / 100;
        }

        if (sign.value == "" || sign.value == "erase"){
            temp.value = screen.value;
            
        } else {
            if(sign.value == "+"){
                temp.value = parseFloat(temp.value) + parseFloat(screen.value);
            }
    
            if(sign.value == "-"){
                temp.value = parseFloat(temp.value) - parseFloat(screen.value);
            }
    
            if(sign.value == "*"){
                temp.value = parseFloat(temp.value) * parseFloat(screen.value);
            }
    
            if(sign.value == "/"){
                if(screen.value == "0"){
                    temp.value = 0
                } else {
                    temp.value = parseFloat(temp.value) / parseFloat(screen.value);
                }
            }
        }
        screen.value = "0"
        sign.value = id;
    } 
    

    if (id == "=" && screen.value != ""){

        sign.value = "erase";
        screen.value = temp.value;
        temp.value = "";
        
    }
        
}
