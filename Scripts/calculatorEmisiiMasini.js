const conversieBenzina = 23.2;
const conversieMotorina = 26.5;

function CalculeazaTotalul() {
  const distantaInputElement = document.getElementById("js_distanta");
  let distanta = Number(distantaInputElement.value);

  const unitateSelectElement = document.getElementById("js_unitate");
  const unitate = unitateSelectElement.value;

  const eficientaInputElement = document.getElementById("js_eficienta");
  let eficienta = Number(eficientaInputElement.value);

  const tipEficientaSelectElement = document.getElementById("js_tip_eficienta");
  const tipEficienta = tipEficientaSelectElement.value;

  const tipCombustibilSelectElement = document.getElementById("js_tip_combustibil");
  const tipCombustibil = tipCombustibilSelectElement.value;
  
  if (unitate === 'mile') {
    MileInKilometri(distanta);
  }

  if (tipEficienta === 'g/km') {
    if (tipCombustibil === 'benzina') {
      EmisiigKm(distanta, eficienta, conversieBenzina);
    } else if (tipCombustibil === 'motorina') {
      EmisiigKm(distanta, eficienta, conversieMotorina);
    }
  } else if (tipEficienta === 'L/100km') {
    if (tipCombustibil === 'benzina') {
      Emisiil100km(distanta, eficienta, conversieBenzina);
    } else if (tipCombustibil === 'motorina') {
      Emisiil100km(distanta, eficienta, conversieMotorina);
    }
  }
}

function MileInKilometri(distanta) {
  distanta *= 1.60934;
}

function EmisiigKm(distanta, eficienta) {
  let emisii = distanta * eficienta;
  document.querySelector('.js_rezultat').innerHTML = `<p>${emisii / 1000000} tone metrice de CO2</p>`;
}

function Emisiil100km(distanta, eficienta, conversie) {
  let emisii = eficienta * conversie * distanta;
  document.querySelector('.js_rezultat').innerHTML = `<p>${emisii / 1000000} tone metrice de CO2</p>`;
}