function login(){
    window.location = "application.html"
}

function link(a){
    var a1 = document.getElementById("a-option-1");
    var a2 = document.getElementById("a-option-2");

    var d1 = document.getElementById("d-option-1");
    var d2 = document.getElementById("d-option-2");

    if(a === 1){
        //remove and set the current border
        a2.classList.remove("border-current");
        a1.classList.add("border-current");

        //hide and show the correct body
        d1.classList.remove("hidden");
        d1.classList.add("flex");
        d2.classList.add("hidden");
    }else{
        //set the current border
        a1.classList.remove("border-current");
        a2.classList.add("border-current");

        //hide and show the correct body
        d2.classList.remove("hidden");
        d2.classList.add("flex");
        d1.classList.add("hidden");
    }
    
}