const factorElectricitate = 0.3245;
const conversieGazNatural = 0.435;
const conversiePropan = 2.99;
const conversiePaletiLemn = 0.45;

function CalculeazaTotalul() {
  const electricitateInputElement = document.getElementById('js_electricitate');
  let electricitate = Number(electricitateInputElement.ariaValueMax);

  const gazNaturalInputElement = document.getElementById('js_gaz_natural');
  let gazNatural = Number(gazNaturalInputElement.value);

  const propanInputElement = document.getElementById('js_propan');
  let propan = Number(propanInputElement.value);

  const paletiLemnInputElement = document.getElementById('js_paleti_lemn');
  let paletiLemn = Number(paletiLemnInputElement.value);

  const emisiiElectricitate = EmisiiElectricitate(electricitate);

  const emisiiGazNatural = EmisiiGazNatural(gazNatural);

  const emisiiPropan = EmisiiPropan(propan);

  const emisiiPaletiLemn = EmisiiPaletiLemn(paletiLemn);

  const total = emisiiElectricitate + emisiiGazNatural + emisiiPropan + emisiiPaletiLemn;

  document.getElementById('js_rezultat').innerHTML = `Total emisii: ${total} kg CO2`;
}

function EmisiiElectricitate(electricitate) {
  return electricitate * factorElectricitate;
}

function EmisiiGazNatural(gazNatural) {
  return gazNatural * conversieGazNatural;
}

function EmisiiPropan(propan) {
  return propan * conversiePropan;
}

function EmisiiPaletiLemn(paletiLemn) {
  return paletiLemn * conversiePaletiLemn;
}