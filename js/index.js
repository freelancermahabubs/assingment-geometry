let serial = 0;
function getInputFieldValueById(elementId){
  const inputFieldElement = document.getElementById(elementId);
  const inputFieldElementString = inputFieldElement.value;
  const inputFieldElementValue = parseFloat(inputFieldElementString);
  inputFieldElement.value = '';
  return inputFieldElementValue;
  
};
function getTextElementById(elementsId){
  const textElement = document.getElementById(elementsId);
  const textElements = textElement.innerText;
  return textElements;
};

// display all Data function here

function displayData(cartTitle, area){
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
  <td>${serial}</td>
  <td>${cartTitle}</td>
  <td>${area}cm²</td>
  <td>
  <button class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-semibold text-xs text-white px-2 rounded-lg py-2">Convert to m<sup>2</sup></button>
  </td>
  `;
  container.appendChild(tr);
  };

// this is  triangle calculation 

document.getElementById("btn-triangle").addEventListener("click", function(){
  serial = serial + 1;
  const triangle = getTextElementById("triangle");
  const base = getInputFieldValueById("triangle-base");
  const height = getInputFieldValueById("triangle-height");

  if(isNaN(base) || base === '' || base <= 0 || base === String || isNaN(height) || height === '' || height <= 0 || height === String){
    return alert("please provide a Valid Number");
  }
  const area = 0.5 * base * height;
  displayData(triangle, area,);
  
});


// this is rectangle calculation
document.getElementById("btn-rectangle").addEventListener("click", function(){
  serial = serial + 1;
  const rectangle = getTextElementById("rectangle");
  const width = getInputFieldValueById("rectangle-width");
  const length = getInputFieldValueById("rectangle-length");
  if(isNaN(width) || width === '' || width <= 0 || width === String || isNaN(length) || length === '' || length <= 0 || length === String){
    return alert("please provide a Valid Number");
  }
  const area = width * length;
  displayData(rectangle, area);
});

  // this is Parallelogram Calculation

  document.getElementById("btn-parallelogram").addEventListener("click", function(){
    serial = serial + 1;
    const parallelogram = getTextElementById("parallelogram");
    const base = getInputFieldValueById("parallelogram-base");
    const height = getInputFieldValueById("parallelogram-height");
    if(isNaN(base) || base === '' || base <= 0 || base === String || isNaN(height) || height === '' || height <= 0 || height === String){
      return alert("please provide a Valid Number");
    }
    const area = base * height;
    displayData(parallelogram, area);
  });

    // this is Rhombus calculation

    document.getElementById("btn-rhombus").addEventListener("click", function(){
      serial = serial + 1;
      const rhombus = getTextElementById("rhombus");
      const d1 = getInputFieldValueById("rhombus-d1");
      const d2 = getInputFieldValueById("rhombus-d2");
  
      if(isNaN(d1) || d1 === '' || d1 <= 0 || d1 === String || isNaN(d2) || d2 === '' || d2 <= 0 || d2 === String){
        return alert("please provide a Valid Number");
      }
      const area = 0.5 * d1 * d2;
      displayData(rhombus, area);
    });

    // this is pentagon calculation
  document.getElementById("btn-pentagon").addEventListener("click", function(){
    serial = serial + 1;
    const pentagon = getTextElementById("pentagon");
    const pentagonP = getInputFieldValueById("pentagon-p");
    const pentagonB = getInputFieldValueById("pentagon-b");

    if(isNaN(pentagonP) || pentagonP === '' || pentagonP <= 0 || pentagonP === String || isNaN(pentagonB) || pentagonB === '' || pentagonB <= 0 || pentagonB === String){
      return alert("please provide a Valid Number");
    }
    const area = 0.5 * pentagonP * pentagonB;
    displayData(pentagon, area);
  });

     // this is ellipse calculation
     document.getElementById("btn-ellipse").addEventListener("click", function(){
      serial = serial + 1;
      const ellipse = getTextElementById("ellipse");
      const ellipseA = getInputFieldValueById("ellipse-a");
      const ellipseB = getInputFieldValueById("ellipse-b");
  
      if(isNaN(ellipseA) || ellipseA === '' || ellipseA <= 0 || ellipseA === String || isNaN(ellipseB) || ellipseB === '' || ellipseB <= 0 || ellipseB === String){
        return alert("please provide a Valid Number");
      }
      const area = (3.14 * ellipseA * ellipseB).toFixed(2);
      displayData(ellipse, area);
    });

    // this is blog button 
    document.getElementById("btn-blog").addEventListener("click", function(){
      if(click = true){
        window.location.href='question.html';
      }
    });
  


// backgroundColor random generator

let cards = document.querySelectorAll(".card");

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
cards.forEach(function(card) {
  card.addEventListener("mouseenter", function() {
    let randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
  });
});