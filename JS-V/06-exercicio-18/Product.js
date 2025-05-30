class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const watch = new Product("Relógio de Pulso", "...", 80)
watch.addStock(999);
const priceWithDiscount = watch.calculateDiscount(10)

console.log(watch);
console.log(priceWithDiscount);