


if(localStorage.getItem("isSmall")==="yes"){
  sidebarID.classList.add("small-sidebar");
}else{
  sidebarID.classList.remove("small-sidebar");
}

const togglesidebar = () =>{

  if(localStorage.getItem("isSmall") === "no"){
    localStorage.setItem("isSmall","yes");
    sidebarID.classList.add("small-sidebar");
  }else{
    localStorage.setItem("isSmall","no");
    sidebarID.classList.remove("small-sidebar")
  }
  
}