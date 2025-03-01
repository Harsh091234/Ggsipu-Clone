const showMenuIcon = document.getElementById("showMenu");
const closeMenuIcon = document.getElementById("closeMenu");
const navBar = document.getElementById("navbar");
const searchBar = document.getElementById("searchBarBlock");
const searchBar1 = document.getElementById("searchBarBlock1");





function ShowMenu(){
    searchBar1.style.display = "flex";
    closeMenuIcon.style.display = "block";
    showMenuIcon.style.display = "none";
    navBar.style.height = "320px";
    searchBar.style.display = "none"
   
}
function CloseMenu(){
    searchBar1.style.display = "none";
    closeMenuIcon.style.display = "none";
    showMenuIcon.style.display = "block";
    navBar.style.height = "50px";
 searchBar.style.display = "flex"
}