var saveButton = document.querySelector('#save-button');
var backgroundButtons = document.querySelector('.backgrounds');
var allGarments = [];

saveButton.addEventListener('click', saveOutfit);
backgroundButtons.addEventListener('click', assignBackgroundChoice)

function saveOutfit() {
  var outfitNameInput = document.querySelector('input');
  backgroundChoice = localStorage.getItem('background');
  uniqueID = generateUniqueID();
  //Needs to instantiate on page load --> see spec
  var outfit = new Outfit(outfitNameInput.value, backgroundChoice, uniqueID)
  console.log(outfit);
}

//Work on making this more dynamic to generate a truly unique number.
function generateUniqueID() {
  return Math.floor(Math.random() * 10);
}

function assignBackgroundChoice() {
  var backgroundSelection = event.target.id;
  localStorage.setItem('background', backgroundSelection);
}
