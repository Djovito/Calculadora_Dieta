function menu(){
    var menu =document.getElementById("main-sidebar");
    console.log(menu.classList.toString());
    if(menu.classList.toString() == "main-sidebar menu=active"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "flex";
    }
    menu.classList.toggle("menu-active");
}

