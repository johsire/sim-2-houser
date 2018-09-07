const express = require('express');

module.exports = {
  createHouse: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, address , city, state, zip } = req.body;

    dbInstance.create_house({ name, address , city, state, zip })
    .then(data => {
      res.status(200).json({
        houses: data,
      })
    })
    .catch(err => {
      res.status(500).send({errorMessage: "Oh no! Something went wrong!"});
    });
  },

  getAll: (req, res, next) => {
    const dbInstance = req.app.get('db');
    
    dbInstance.get_houses()
      .then(() => res.send(200).send(houses))
      .catch(err => {
        res.status(500).send({errorMessage: "Error! Somethng went wrong"})
      })


  },

  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, address , city, state, zip } = req.body;

    dbInstance.create_house()
      .then(() => res.sendStaus(200))
      .catch(err => {
        res.status(500).send({errorMessage: "Error! Somethng went wrong"});
        console.log(err)
      });
  },

  delete: (req, res) => {
    const dbInstance = req.app.get('db');
    const deleteId = req.params.id;
    houseIndex = houses.findIndex( house => 
      houseIndex == deleteId);
      houses.splice(houseIndex)
      res.status(200).send(houses);

  }

};
