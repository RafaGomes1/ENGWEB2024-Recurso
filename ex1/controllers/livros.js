var mongoose = require("mongoose")

var Livro = require("../models/livros");

module.exports.list = () => {
    return Livro
        .find()
        .sort({_id:1})
        .exec()
}

module.exports.findById = id => {
    return Livro
        .findOne({_id : id})
        .exec()
}

module.exports.insert = (livro) => {
    if((Livro.find({_id : livro._id}).exec()).length != 1){
        var newLivro = new Livro(livro)
        return newLivro.save()
    }
}

module.exports.remove = (id) => {
    return Livro
        .findByIdAndDelete(id)
        .exec()
}

module.exports.update = (id, livro) => {
    return Livro
    .findByIdAndUpdate(id,livro, {new:true})
    .exec()
}

module.exports.findByCharater = charater => {
    return Livro
        .find({characters : charater})
        .sort({_id:1})
        .exec()
}

module.exports.findByGenres = genre => {
    return Livro
        .find({genres : genre})
        .sort({_id:1})
        .exec()
}

module.exports.listGenres = () => {
    return Livro
        .aggregate([
            { $unwind: "$genres" },
            { $group: { _id: "$genres" } },
            { $sort: { _id: 1 } },
            {$project: {_id:0, genre: "$_id"}},
            {$group: {_id:null, genres: {$push: "$genre"}}}
        ])
        .exec()
        .then(result => {
            return result.length > 0 ? result[0].genres : [];
        });
}

module.exports.listCharaters = () => {
    return Livro
        .aggregate([
            { $unwind: "$characters" },
            { $group: { _id: "$characters" } },
            { $sort: { _id: 1 } },
            {$project: {_id:0, character: "$_id"}},
            {$group: {_id:null, characters: {$push: "$character"}}}
        ])
        .exec()
        .then(result => {
            return result.length > 0 ? result[0].characters : [];
        });
}

module.exports.findByAuthor = idAuthor => {
    return Livro
        .find({author : idAuthor})
        .sort({_id:1})
        .exec()
}