document.addEventListener("DOMContentLoaded", function() {
  container = document.getElementsByClassName("symbol");
  //console.log(container);
  pierwiastek = [];
  y = 0;
  for (x = 0; x < container.length; x++ ){
     // console.log(container[x].innerHTML);
      if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {

          pierwiastek[y] = container[x];
          y++;
      }
  }
  for (x = 0; x < pierwiastek.length; x++ ){
      console.log("x:"+ x,pierwiastek[x].textContent);
   
  }

  document.addEventListener("click", getSymbol);
  function getSymbol(e) {
      console.log(e.target);
  }

  random = Math.floor(Math.random() * pierwiastki.length + 1);
  console.log("Wylosowany pierwiastek: "+pierwiastki[random]);

});
