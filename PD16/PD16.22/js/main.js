function gautiPavadinima(funkcija) {
  if (typeof funkcija === 'function') {
    return funkcija.name || 'Anoniminė funkcija';
  } else {
    return 'Tai nėra funkcija';
  }
}

function manoFunkcija() {
}

var pavadinimas = gautiPavadinima(manoFunkcija);
console.log("Funkcijos pavadinimas:", pavadinimas);
  