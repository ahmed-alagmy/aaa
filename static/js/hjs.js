let searchh = document.querySelector('.search');
    searchh.onclick = function(){
        datediv = document.querySelector('.date');
        datediv.style.display = "flex";
    };


    let bsear = document.querySelector('.sear');
    bsear.onclick = function(){
        datediv = document.querySelector('.date');
        datediv.style.top = "-1000px";
        console.log(datediv);
    };