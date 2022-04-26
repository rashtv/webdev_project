export class Wine {
  public name: string;
  public price: string;
  public imagePath: string;
  public description: string;

  constructor(name: string, price: string, imagePath: string, description: string) {
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    this.description = description;
  }
}
