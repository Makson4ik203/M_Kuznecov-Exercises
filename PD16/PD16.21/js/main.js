function naudotiCallBack(callback) {
  console.log("Vykdome pagrindinę funkciją.");
    
  if (typeof callback === 'function') {
    callback();
  } else {
    console.log("Klaida: Callback nėra funkcija.");
  }
}

function manoCallBack() {
  console.log("Ši funkcija yra callback funkcija.");
}

naudotiCallBack(manoCallBack);
