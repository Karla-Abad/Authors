const AuthorController = require("../controllers/author.controller");
module.exports = (app) => {
    app.get("/api", AuthorController.findAllAuthors);
    app.post("/api/new", AuthorController.createAuthor);
    app.get("/api/edit/:id", AuthorController.findAuthor);
    app.put("/api/edit/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
};