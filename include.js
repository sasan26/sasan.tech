function loadParts() {
  var sas, i, elmnt, file, xhttp;
  sas = document.getElementsByTagName("*");
  for (i = 0; i < sas.length; i++) {
    elmnt = sas[i];
    file = elmnt.getAttribute("sasan");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Not found.";}
          elmnt.removeAttribute("sasan");
          loadParts();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
