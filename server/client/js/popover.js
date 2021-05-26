
var popoverBtn = document.getElementById("btn-popover");
var popover = new bootstrap.Popover(popoverBtn, { //popover is created and options is set
  placement: "bottom",
  html: true,
  container: 'body',
  content: document.getElementById("popover-content").innerHTML
});

function addClearFunction(){
  $('body').on('shown.bs.popover', function () { //once shown.bs.popover exists, clearCart() is added to all buttons with clearCart className
    var btn = document.getElementsByClassName("clearCart");
    for (var i=0; i < btn.length; i++) {
      btn[i].setAttribute("onclick", "clearCart()")
    }
  });
}

function addRemoveFunction(){
  $('body').on('shown.bs.popover', function () { //once shown.bs.popover exists, removeFromCart() is added to all buttons with removeFromCart className
    var btn = document.getElementsByClassName("removeFromCart");
    for (var i=0; i < btn.length; i++) {
      btn[i].setAttribute("onclick", "removeFromCart()")
    }
  });
}

window.onload = function(){
  addClearFunction();
  addRemoveFunction();
  }