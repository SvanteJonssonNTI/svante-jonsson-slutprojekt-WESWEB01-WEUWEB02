
var popoverBtn = document.getElementById("btn-popover");
var popover = new bootstrap.Popover(popoverBtn, {
  placement: "bottom",
  html: true,
  container: 'body',
  content: document.getElementById("popover-content").innerHTML
});

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})
