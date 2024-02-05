//Gioco dei dadi, chi fa di più vince



  // Lancio dado
function myFunction() {
  x = Math.floor((Math.random() * 6) + 1);
  document.getElementById("first").innerHTML = x;
  y = Math.floor((Math.random() * 6) + 1);
  document.getElementById("second").innerHTML = y;

  // Si verifica quale numero ha vinto o se c'è stato un pareggio
  if (x > y) {
    risultato = "L'USER HA VINTO ";
  } else if (x == y) {
      risultato = "I CONCORRENTI HANNO PAREGGIATO";
    } else {
      risultato = "IL COMPUTER HA VINTO";
    }

  // Si comunica chi ha vinto o se c'è stato un pareggio
  document.getElementById('vincitore').innerHTML = "Risultato: " + risultato;
}