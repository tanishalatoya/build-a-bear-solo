class Outfit {
  constructor(title, background, id) {
    this.title = title;
    this.background = background || 'none';
    this.id = id || undefined;
    this.garments = [];
  }

  addGarment(attire) {
    this.garments.push(attire);
  }

  removeGarment() {
    for (var i = 0; i < this.garments.length; i++) {
      //check for match of items) {
        this.garments.splice(i, 1);
      }
    }
  }
}
