var saveButton = document.querySelector('#save-button');
var backgroundButtons = document.querySelector('.backgrounds');
var allGarments = [];

window.addEventListener('load', instantiateOufits);
saveButton.addEventListener('click', saveOutfit);
backgroundButtons.addEventListener('click', assignBackgroundChoice)

function instantiateOufits() {
  //Get outfits from local localStorage --> localStorage.getItem --> should return an array of string elements
  //Parse items back into objects --> JSON.Parse --> This should return an array of uninstantiated objects
  //Loop over the objects within the array to reinstantiate each property of the outfit object as an instance
  //Push reinstantiated outfit back into the allGarment array

}

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
