const Author = require("../models/author.model");

module.exports.findAllAuthors = (req, res) => {
    Author.find()
      .then((allAuthors) => {
        console.log({ allAuthors });
        res.json({ allAuthors });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ err });
      });
  };
  
  module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
      .then((author) => res.json(author))
      .catch((err) => res.status(400).json({ err }));
  };
  
  module.exports.findAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(author => res.json(author))
    .catch((err)=> res.status(400).json({err}))
  }
  
  module.exports.updateAuthor = (req, res)=> {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
      .then(updatedAuthor => res.json(updatedAuthor))
      .catch(err => res.status(400).json({err}))
  }
  
  module.exports.deleteAuthor = (req, res)=> {
    Author.deleteOne({_id: req.params.id})
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch((err)=> res.status(400).json({err}))
  }
  