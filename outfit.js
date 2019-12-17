class Outfit {
  constructor(title, background, id) {
    this.title = title;
    this.background = background || 'none';
    this.id = id || undefined;
    this.garments = [];
  }

  addGarment(attire) {
    allGarments.push(attire);
    // 'attire' will be the object instance created on the main.js
  }

  removeGarment() {
    console.log(event);
    for (var i = 0; i < this.garments.length; i++) {
      if (event.target.id === this.garments[i]) //'event.target.id' will need to be updated to something else as objects are passed into the array.
        this.garments.splice(i, 1);
      }
    }
  }
