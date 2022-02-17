const AuthorController = require("../controllers/author.controller");
module.exports = (app) => {
    app.get("/api", AuthorController.findAllAuthors);
    app.post("/api/new", AuthorController.createAuthor);
    app.get("/api/authors/:id", AuthorController.findAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};