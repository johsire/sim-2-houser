const express = require('express');

module.exports = {
  createHouse: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, address , city, state, zip } = req.body;

    dbInstance.create_house({ name, address , city, state, zip })
    .then(data => {
      res.sendStatus(200).json({
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
      .then(() => res.sendStaus(200).send(houses))
      .catch(err => {
        res.status(500).send({errorMessage: "Error! Somethng went wrong"})
      })
  },

  create: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { name, address , city, state, zip } = req.body;

    dbInstance.create_house({ name, address , city, state, zip })
      .then(() => res.sendStaus(200))
      .catch(err => {
        res.status(500).send({errorMessage: "Error! Somethng went wrong"});
        console.log(err)
      });
  },

  delete: (req, res, next) => {
    const dbInstance = req.app.get('db');
    const { params } = req;

    dbInstance.delete_house([ params.id ])
              .then(() => res.sendStatus(200))
              .catch(err => {
                res.status(500).send({ errorMessage: "Error Something went wrong in the backend" })
              });
  }

  // delete: (req, res) => {
  //   const dbInstance = req.app.get('db');
  //   const { houseId } = req.params.id;
  //   let deleteId = houseId
  //   houseId = houses.filter( house => 
  //     house.id === deleteId);
  //     houses.splice(houseId, 1)
  //     res.status(200).send(houses);
  // }
};
