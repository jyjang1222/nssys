var script_arr = [
  "js/modal.js", "js/FnbStyle.js"
  // 추가할 js파일 여기에 작성,
  // ex) js/aa.js
];
function getScripts(scripts, callback) {
  var progress = 0;
  scripts.forEach(function (script) {
    $.getScript(script, function () {
      if (++progress == scripts.length) callback();
    });
  });
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;

  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("data-include");
    if (file) {
      var size = document.querySelectorAll("[data-include]").length;
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("data-include");

          if (size === 1) {
            getScripts(script_arr, function () {
              // console.log("스크립트 로드");
            });
          } else {
            includeHTML();
          }
          // console.log(this.readyState);
        } else {
          // console.log(this.readyState);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
