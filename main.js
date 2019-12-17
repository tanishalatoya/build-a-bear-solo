var saveButton = document.querySelector('#save-button');
var backgroundButtons = document.querySelector('.backgrounds');

saveButton.addEventListener('click', saveOutfit);
backgroundButtons.addEventListener('click', assignBackgroundChoice)

function saveOutfit() {
  var outfitNameInput = document.querySelector('input');
  //Target the background and have the assigned value appear here
  backgroundChoice = localStorage.getItem('background');
  //Use a uniqueID generator and target that
  uniqueID = generateUniqueID();
  //Instantiate a new outfit
  var outfit = new Outfit(outfitNameInput.value, backgroundChoice, uniqueID)
  console.log(outfit);
}

function generateUniqueID() {
  return Math.floor(Math.random() * 10);
}

function assignBackgroundChoice() {
  var backgroundSelection = event.target.id;
  localStorage.setItem('background', backgroundSelection);
}
