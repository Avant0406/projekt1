var repeatElements = [];
//definciuje tablicę powtórzonych elementów
goodAnswer = 0;
badAnswer = 0;

reset = document.getElementById("reset");
reset.addEventListener("click", resetStatistics);

container = document.getElementsByClassName("symbol");
//container przyjmuje klasę "symbol"
elementsSymbol = [];
//definiuje tablicę symboli elementów
y = 0;
for (x = 0; x < container.length; x++) {
    if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
        //wyklucza z symboli pola puste i z liczbami
        elementsSymbol[y] = container[x];
        // przypisuje właściwe liczb z pierwiastków do containerów
        console.log(y + "-" + elementsSymbol[y].textContent);
        y++;
        //co każdą pętlę dodaje do containera 1 aż osiągnie liczbę z y
    }
}
game();


function game() {
    console.log(repeatElements);
    if (repeatElements.length >= elements.length) {
        /*gdy liczba elementów tablicy z powtórzonymi pierwiastkami jest równa 0 lub większa
         od ilości pierwiastków następuje koniec gry*/
        clearInterval(myTimer);
        document.getElementById("timer").innerHTML = "Koniec gry!";
        reset.disabled = false;
    } else {
        randomElement = Math.floor(Math.random() * elements.length);
        //generuje losową liczbę (generowanie odbywa się od 0 do 117, numery pierwiastków)
        if (repeatElements.includes(randomElement)) {
            // jeśli wylosowana liczba jest w tablicy powtórzonych, wykonaj funkcję game jeszcze raz  
            game();
        } else {
            elementsSymbol[randomElement].parentElement.classList.add("checker");
            // kolor wylosowanegoo pierwiatska zostaje zmieniony z szarego na różowy
            repeatElements.push(randomElement)
                // powtórzone pierwiastki dodaje do tablicy z powtórzonymi pierwiastkami
        }
    }
}

function checkElement(event) {
    if (event.keyCode == 13) {
        if (event.target.value == elements[randomElement][1]) {
            elementsSymbol[randomElement].parentElement.classList.remove("checker");
            elementsSymbol[randomElement].parentElement.classList.add("goodAnswer");
            // usuwa kolor z "checked"(szary), a zamiast tego dodaje z "goodAnswer"(zielony)
            
            goodAnswer+=1;
            getGoodAnswer("Poprawnych odpowiedzi: "+goodAnswer);

        } else {
            elementsSymbol[randomElement].parentElement.classList.remove("checker");
            elementsSymbol[randomElement].parentElement.classList.add("badAnswer");
            // usuwa kolor z "checked" (szary), a zamiast tego dodaje z "badAnswer"(czerwony)
            
            badAnswer+=1;
            getBadAnswer("Błędnych odpowiedzi: "+badAnswer);
        }
        event.target.value = "";
        game();
    }
}


function getGoodAnswer(i){
    document.getElementById("goodAnswer").innerHTML = i;
}

function getBadAnswer(i){
    document.getElementById("badAnswer").innerHTML = i;
}

function resetStatistics(){
    repeatElements = [];
    goodAnswer = 0;
    badAnswer = 0;
    getGoodAnswer("Poprawnych odpowiedzi: 0");
    getBadAnswer("Błędnych odpowiedzi: 0");
    for (x = 0; x < container.length; x++) {
        if (container[x].textContent != 'DE' && container[x].textContent != 'DEL' && container[x].textContent != '57-71' && container[x].textContent != '89-103') {
            elementsSymbol[y] = container[x];
            elementsSymbol[y].parentElement.classList.remove("goodAnswer");
            elementsSymbol[y].parentElement.classList.remove("badAnswer");
            y++;
        }
    }
    myInput.disabled = false;
    reset.disabled = true;
    setInterval(time, 1000);
    countDownDate = new Date().getTime() + (10000);
    game();
}

  // Set the date we're counting down to
var countDownDate = new Date().getTime() + (10000);

// Update the count down every 1 second
var myTimer = setInterval(time, 1000);

function time() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML =  minutes + " min. " + seconds + " sek. ";
    
  // If the count down is over, write some text 
  if (distance <= 0) {
    // clearInterval(x);
    clearInterval(myTimer);
    elementsSymbol[randomElement].parentElement.classList.remove("checker");
    document.getElementById("timer").innerHTML = "Koniec gry!";
    //badAnswer+=1;
    getBadAnswer("Błędnych odpowiedzi: "+badAnswer);
    myInput.disabled = true;
    reset.disabled = false;
    
   
  }
}
