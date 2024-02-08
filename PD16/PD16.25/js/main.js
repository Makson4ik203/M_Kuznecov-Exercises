var slaptasSkaicius = Math.floor(Math.random() * 100) + 1;

function atspekSkaiciu() {
  var spejimas = prompt('Atspėkite skaičių nuo 1 iki 100:');
  var spejimasSkaitmuo = parseInt(spejimas);

  if (isNaN(spejimasSkaitmuo)) {
    alert('Netinkamas įvedimas. Prašome įvesti skaičių.');
    atspekSkaiciu(); 
    return;
  }

  if (spejimasSkaitmuo === slaptasSkaicius) {
    alert('Sveikiname! Jūs atspėjote teisingą skaičių.');
  } else {
    var zinute = spejimasSkaitmuo < slaptasSkaicius ? 'Per mažas!' : 'Per didelis!';
    alert(zinute);
    atspekSkaiciu(); 
  }
}

atspekSkaiciu();
