var saveButton = document.querySelector('#save-button');

saveButton.addEventListener('click', saveOutfit);

function saveOutfit() {
  var outfitNameInput = document.querySelector('input');
  //Target the background and have the assigned value appear here

  //Use a uniqueID generator and target that
  uniqueID = generateUniqueID();
  //Instantiate a new outfit
  var outfit = new Outfit(outfitNameInput.value, backgroundChoice, uniqueID)

}

function generateUniqueID() {
  return Math.floor(Math.random() * 10);
}
