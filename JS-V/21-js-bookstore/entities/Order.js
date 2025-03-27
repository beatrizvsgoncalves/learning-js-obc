module.exports = class Order {
  #total
  #items
  #user

  constructor(items, user) {
    items.forEach(( {product, quantity} ) => {
      if (quantity > product.inStock) {
        throw new Error(`Not enough ${product.name} in stock!`)
      }
    })
    this.#items = items
    this.#user = user
    this.#total = items.reduce((total, { product, quantity }) => total + product.price * quantity, 0)
  }

  get data() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total
    }
  }
}