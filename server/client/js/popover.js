
var popoverBtn = document.getElementById("btn-action");
var popover = new bootstrap.Popover(popoverBtn, {
  placement: "bottom",
  html: true,
  container: 'body',
  content: document.getElementById("popover-content").innerHTML
});