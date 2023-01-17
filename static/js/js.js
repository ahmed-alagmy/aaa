let icon = document.getElementById('show') ;

icon.onclick = function(){
let input = document.getElementById('pass');

    if(input.getAttribute('type')=="password"){
        input.setAttribute('type','text');
        icon.setAttribute('class','fa-solid fa-eye-slash');
        } 
        else {

         input.setAttribute('type','password');
        icon.setAttribute('class','fa-sharp fa-solid fa-eye');
        }
    };
    // ---------------------------------------------------------------
    