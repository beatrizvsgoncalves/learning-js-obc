const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Hello World", "This is my first post.")

post.addComment("Jane Doe", "Great post!")
post.addComment("Joan Doe", "I think you're wrong.")
post.addComment("Jill Doe", "I agree.")

const post2 = john.writePost("My Second Post", "This is my second post.")

console.log(john)
console.log(post)
console.log(post2)