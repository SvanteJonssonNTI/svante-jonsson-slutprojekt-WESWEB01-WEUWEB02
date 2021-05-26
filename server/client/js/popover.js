
var popoverBtn = document.getElementById("btn-popover");
var popover = new bootstrap.Popover(popoverBtn, {
  placement: "bottom",
  html: true,
  container: 'body',
  content: document.getElementById("popover-content").innerHTML
});

window.onload = function addClearFunction(){
  $('body').on('shown.bs.popover', function () {
    var btn = document.getElementsByClassName("clearCart");
    for (var i=0; i < btn.length; i++) {
      btn[i].setAttribute("onclick", "clearCart()")
    }
  });
}

window.onload = function addRemoveFunction(){
  $('body').on('shown.bs.popover', function () {
    var btn = document.getElementsByClassName("removeFromCart");
    for (var i=0; i < btn.length; i++) {
      btn[i].setAttribute("onclick", "removeFromCart()")
    }
  });
}