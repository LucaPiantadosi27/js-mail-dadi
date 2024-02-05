var mailUtente = prompt('Inserisci la tua mail');
console.log(mailUtente);

var mailDatabase = ['Paolone@gmail.com', 'franco@gmail.com', 'andrea@gmail.com', 'pino@gmail.com'];
console.log(mailDatabase[i]);
var mailPresente = false;

for (var i = 0; i < mailDatabase.length; i++){
  if (mailUtente == mailDatabase[i]){
    mailPresente = true;
  }
}
if (mailPresente == true){
  alert('Benvenuto nel sito');
}else {
  alert('Accesso non autorizzato!')
}

console.log(mailPresente);