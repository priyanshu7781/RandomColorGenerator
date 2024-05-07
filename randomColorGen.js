//  "Pick a Color" button
let button = document.getElementById('color-button');

// "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

//  function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

/*function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  event.target.style.backgroundColor= randomColor;
}*/

button.addEventListener('click',(event) => {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor= randomColor;
    event.target.innerHTML = `Color Code: ${randomColor}`
});
mysteryButton.addEventListener('wheel',(event) => {
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.backgroundColor= randomColor;
    event.target.innerHTML = `Color Code: ${randomColor}`
});
