function checkElement(event){
    if(event.keyCode == 13){
        //console.log(event.target.value)
        if(event.target.value == pierwiastki[random][1]){

            pierwiastek[random].parentElement.classList.remove("checker")
            pierwiastek[random].parentElement.classList.add("lightgreen")
            correctAnswer+=1;
            
           

        }
        else{
            pierwiastek[random].parentElement.classList.remove("checker")
            pierwiastek[random].parentElement.classList.add("lightred")
            incorrectAnswer+=1
            
        }
        game()
    }

}

correctAnswer = 0;
incorrectAnswer = 0;

  container = document.getElementsByClassName("symbol");
  repeatElements = [];
  game();
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
    //  console.log("x:"+ x,pierwiastek[x].textContent);
   
  }

  document.addEventListener("click", getSymbol);
  function getSymbol(e) {
    //  console.log(e.target);
  }
  
function game(){
    random = Math.floor(Math.random() * pierwiastki.length + 1);
    console.log("Wylosowany pierwiastek: "+pierwiastki[random]);
    if(pierwiastki[random][0] != repeatElements){
        for (x = 0; x < container.length; x++ ){
            if (container[x].textContent == pierwiastki[random][0]){
                container[x].parentElement.classList.add("checker")
            }
        }
        repeatElements.push(random);
        console.log(repeatElements);
    }
    else{
        random = Math.floor(Math.random() * pierwiastki.length + 1);
        console.log("Wylosowany pierwiastek: "+pierwiastki[random]);
        console.log("trafilem na powtorzony pierwiastek")
        game();
    }
}



