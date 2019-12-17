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
}
