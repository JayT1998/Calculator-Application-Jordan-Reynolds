let display = document.getElementById('screen');


const wipe = function(){
    display.value = '';
}

const show = function(n){
    display.value += n;
}

const calc = function(){
    display.value = eval(display.value);
}

const close = function(){
    if (display.value == "80085") {
        window.close()
    }
  
}

