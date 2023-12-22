const menu = document.getElementById("menu");
const menubox = document.getElementById("menubox");
menu.onclick = () => {
    menu.classList.toggle("openmenu");
    if(menu.classList.contains("openmenu")){
        menubox.classList.add("open");
    }else{
        menubox.classList.remove("open");
    }
}