var saveButton = document.querySelector('#save-button');
var backgroundButtons = document.querySelector('.backgrounds');
var allGarments;

window.addEventListener('load', instantiateOufits);
saveButton.addEventListener('click', saveOutfit);
backgroundButtons.addEventListener('click', assignBackgroundChoice)

function instantiateOufits() {
  //Get outfits from local localStorage --> localStorage.getItem --> should return an array of string elements
  var retrievedOutfits = localStorage('savedOutfits');
  //Parse items back into objects --> JSON.Parse --> This should return an array of uninstantiated objects
  var parsedRetrievedOutfits = JSON.parse(retrievedOutfits);
  //Loop over the objects within the array to reinstantiate each property of the outfit object as an instance
  for (var i = 0; i < parsedRetrievedOutfits.length; i++) {
    //the code that creates the cards go here.
  }
  //Push reinstantiated outfit back into the allGarment array
  allGarments.push()
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
