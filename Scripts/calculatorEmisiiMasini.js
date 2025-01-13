const conversieMileInKilometri = 1.61; 
const conversieBenzina = 23.2;
const conversieMotorina = 26.5;
const CO2perKWh = 232;

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
  } else if (tipEficienta === 'KWh/100km') {
    if (tipCombustibil === 'electric') {
      EmisiiKWh100km(distanta, eficienta);
    }
  }
}

function MileInKilometri(distanta) {
  distanta *= conversieMileInKilometri;
}

function EmisiigKm(distanta, eficienta) {
  let emisii = (distanta * eficienta).toFixed(2);;
  document.querySelector('.js_rezultat').innerHTML = `${emisii / 1000}kg de CO2`;
}

function Emisiil100km(distanta, eficienta, conversie) {
  let emisii = (eficienta * conversie * distanta).toFixed(2);;
  document.querySelector('.js_rezultat').innerHTML = `${emisii / 1000}kg de CO2`;
}

function EmisiiKWh100km(distanta, eficienta) {
  let KWh = eficienta / 100 * distanta;
  let emisii = (KWh * CO2perKWh).toFixed(2);
  document.querySelector('.js_rezultat').innerHTML = `${emisii / 1000}kg de CO2`;
}