//alt med class wrapper sættes er variable
var dropTarget = document.querySelector(".wrapper");
//her sørgers der for at alt der har class task sættes i en variable
var draggables = document.querySelectorAll(".task");
//her sørges for at for hvert element i variablet draggables, bliver "draggable"
for(let i = 0; i < draggables.length; i++) {
  draggables[i].addEventListener("dragstart", function (ev) {
     ev.dataTransfer.setData("srcId", ev.target.id);
  });
}
//prevent default.
dropTarget.addEventListener('dragover', function(ev) {
  ev.preventDefault();
});
//her sørger man at man kan har en drop container, inden for alt med class box.
dropTarget.addEventListener('drop', function(ev) {
  ev.preventDefault();
  let target = ev.target;
  let droppable  = target.classList.contains('box');
  let srcId = ev.dataTransfer.getData("srcId");
 //her dublikeres det dragable element for at sørge for at det kan ligges flere gange
  if (droppable) {
    ev.target.appendChild(document.getElementById(srcId).cloneNode(true));
  }
});