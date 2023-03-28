class ArrowChip extends Chip {
  constructor(img) {
    super();
    this.img = img;
  }
  draw() {
    this.context.drawImage(this.img, super.x, super.y, super.radius, super.radius);
  }
}
