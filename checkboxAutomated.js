(function() {
    var aa = document.querySelectorAll("input[type=checkbox]");
    for (var i = 0; i < aa.length; i++){
      // TO fire click event (Click/toggle) 
      aa[i].click();
      // TO only check those boxes
      //aa[i].checked = check
    }
})()
