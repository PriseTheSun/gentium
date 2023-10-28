function toggleRight() {
    var list = document.getElementById("list");
  
    if (list.style.right === "-100%" || list.style.right === "") {
      list.style.right = "0";
      list.style.display = "flex";
    } else {
      list.style.right = "-100%";

    }
  }