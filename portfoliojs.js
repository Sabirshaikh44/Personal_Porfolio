console.log("hello");

// to toogle navbar
let Hambgurgerbtn = document.getElementById('hamburgerbtn');
Hambgurgerbtn.addEventListener('click',function(){let navlist = document.getElementById('navlist');
    if(navlist.style.display != "flex"){
        navlist.style.display = "flex";
        console.log("visible");
    }
    else{
        navlist.style.display = "none";
        console.log("hidden");
    }
    if(Hambgurgerbtn.style.border = "none"){
      Hambgurgerbtn.style.border = "1px solid white";  
    }
    else{
        Hambgurgerbtn.style.display = "none";
    }
    
})




    


