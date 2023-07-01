
  function generaterandom(){
    var rand=Math.floor(Math.random()*6);
    return rand;
  }
  var randomno1=generaterandom();
  // alert(randomno1);
  var randomno2=generaterandom();
  // alert(randomno1);
  // var element=;
  if      (randomno1==0) {
    document.querySelectorAll("img")[0].setAttribute("src","dice1.png");
  }
  else if (randomno1==1) {
    document.querySelectorAll("img")[0].setAttribute("src","dice2.png");
  }
  else if (randomno1==2) {
    document.querySelectorAll("img")[0].setAttribute("src","dice3.png");
  }
  else if (randomno1==3) {
    document.querySelectorAll("img")[0].setAttribute("src","dice4.png");
  }
  else if (randomno1==4) {
    document.querySelectorAll("img")[0].setAttribute("src","dice5.png");
  }
  else if (randomno1==5) {
    document.querySelectorAll("img")[0].setAttribute("src","dice6.png");
  }


  if      (randomno2==0) {
    document.querySelectorAll("img")[1].setAttribute("src","dice1.png");
  }
  else if (randomno2==1) {
    document.querySelectorAll("img")[1].setAttribute("src","dice2.png");
  }
  else if (randomno2==2) {
    document.querySelectorAll("img")[1].setAttribute("src","dice3.png");
  }
  else if (randomno2==3) {
    document.querySelectorAll("img")[1].setAttribute("src","dice4.png");
  }
  else if (randomno2==4) {
    document.querySelectorAll("img")[1].setAttribute("src","dice5.png");
  }
  else if (randomno2==5) {
    document.querySelectorAll("img")[1].setAttribute("src","dice6.png");
  }

  if(randomno1>randomno2){
    document.getElementsByTagName("h1")[0].textContent="Player 1 WON";
  }
  else if(randomno2>randomno1){
    document.getElementsByTagName("h1")[0].textContent="Player 2 WON";
  }
  else {
    document.getElementsByTagName("h1")[0].textContent="TIE";
  }
