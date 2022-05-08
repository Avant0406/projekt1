document.addEventListener("DOMContentLoaded", function() {
    tabela.addEventListener("click", gra)
    
    firstMove = "x";
    numberOfMove = 0;
    
    function resetGame(){
      for(x=1;x<10;x++){
        document.getElementById("p"+x).innerHTML = "";
      }
      reset.disabled = true;
      tabela.addEventListener("click", gra);
      numberOfMove = 0;
      winner = document.getElementById("winner")
      winner.textContent = ""
    }
    
    p=[];
    wygrana=[];
    
    function gra(e){
      numberOfMove++;
      console.log(e.target.id);
      targetId = document.getElementById(e.target.id) ;
      if(targetId.innerHTML == ""){
      targetId.innerHTML = firstMove ;
      
        if(firstMove == "x"){
          firstMove = "o";
        }
        else{
          firstMove = "x";
        }
      }
      if(numberOfMove == 9){
        reset.disabled = false;
        tabela.removeEventListener("click", gra);
        winner = document.getElementById("winner")
        winner.textContent = "Zwycięzca: -"
      }
      reset = document.getElementById("reset");
      reset.addEventListener("click", resetGame)
      for(x=1;x<10;x++){
        p[x] = document.getElementById("p"+x).innerHTML;
      } 
      function getElementP(elem,what) {
        document.getElementById("p"+elem).innerHTML = '<div style="color:#00cc00">'+what+'</div>'
      }
      function getResult(info) {
        document.getElementById("winner").innerHTML = info;
      }
      function wygranaGry(x,kto,par1,par2,par3){
        wygrana[x]=p[par1] + p[par2] + p[par3];
        console.log(wygrana[x]);
          if (wygrana[x]== kto){
            if (kto == "xxx") {
              getElementP(par1,"x");
              getElementP(par2,"x");
              getElementP(par3,"x");
              getResult("Zwycięzca: krzyżyki");
            }
          if (kto == "ooo") {
              getElementP(par1,"o");
              getElementP(par2,"o");
              getElementP(par3,"o");
              getResult("Zwycięzca: kółka");
          }
          reset.disabled = false ;
          tabela.removeEventListener("click",gra);
          }
      }
      wynik = [];
      wynik[1] = 'xxx';
      wynik[2] = 'ooo';
      
      for(x=1;x<3;x++){
        wygranaGry(1,wynik[x],1,2,3);
          wygranaGry(2,wynik[x],4,5,6);
          wygranaGry(3,wynik[x],7,8,9);
          wygranaGry(4,wynik[x],1,4,7);
          wygranaGry(5,wynik[x],2,5,8);
          wygranaGry(6,wynik[x],3,6,9);
          wygranaGry(7,wynik[x],1,5,9);
          wygranaGry(8,wynik[x],3,5,7);
      }    
    };
    });