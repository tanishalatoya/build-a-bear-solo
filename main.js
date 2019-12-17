var saveButton = document.querySelector('#save-button');
var backgroundButtons = document.querySelector('.backgrounds');
var allGarments = [];

saveButton.addEventListener('click', saveOutfit);
backgroundButtons.addEventListener('click', assignBackgroundChoice)

function saveOutfit() {
  var outfitNameInput = document.querySelector('input');
  backgroundChoice = localStorage.getItem('background');
  uniqueID = generateUniqueID();
  var outfit = new Outfit(outfitNameInput.value, backgroundChoice, uniqueID)
  localStorage.removeItem('background');
  console.log(outfit);
}

function generateUniqueID() {
  return Math.random().toString(36).substr(2, 9);
}

function assignBackgroundChoice() {
  var backgroundSelection = event.target.id;
  localStorage.setItem('background', backgroundSelection);
}
