//SIDE NAV BAR----------------------------------------------------------------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("large-header").style.marginLeft = "250px";
    document.getElementById("MyBurger").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("large-header").style.marginLeft = "0";
    document.getElementById("MyBurger").style.display = "block";
  }
  //ENDSIDE NAV BAR----------------------------------------------------------------------------
let aboutMe = ()=>{
  document.getElementById("AboutMe").style.display="block";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("large-header").style.marginLeft = "0";
  document.getElementById("MyBurger").style.display = "block";
}
let returnHome= ()=>{
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("large-header").style.marginLeft = "0";
  document.getElementById("MyBurger").style.display = "block";
  document.getElementById("AboutMe").style.display="none";
}