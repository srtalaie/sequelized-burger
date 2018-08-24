let db = require('../models');
let express = require('express');
let Router = express.Router();

Router.get("/", function(req, res) {
    // send us to the next get function instead.
    res.redirect("/burgers");
  });

    //GET All burger
    Router.get('/burgers', function(req, res){
        db.Burgers.findAll({}).then(function(data){ 
            console.log(data); 
            let burgerObj = {burger: data}
            res.render('index', burgerObj);
        });
    });

    //POST A Burger
    Router.post('/api/burger', function(req, res){
        db.Burgers.create({
            name: req.body.name
        }).then(function(data){
            res.json(data);
        });
    });

    //Update A Burger
    Router.put('/api/burger/:id', function(req, res){
        db.Burgers.update({
            devoured: true
        }, { 
            where: {
                id: req.params.id
            }
        }).then(function(data){
            res.json(data);
        });
    });

    module.exports = Router;