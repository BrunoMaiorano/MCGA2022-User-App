const user = require("../models/User");

const controller = {
  //Obtener Lista entera de los productos
  getALLUsers: (req, res) => {
    user
      .find({ isdeleted: false })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  },
  //Obtener un Producto por id
  getUserByPk: (req, res) => {
    user
      .findById(req.params.id)
      .then((data) => res.status(200).json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));

    /*    product.findById('633a35c770129744dc8f5088', (err, data) => {
        if(err){
          console.log(err)
        } else {
          console.log(data)
        }
      }) */
    console.log(req.params.id);
  },
  //crear producto
  createUser: (req, res) => {
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email,
    };

    user
      .create(newUser)
      .then((data) => res.status(201).json({ msg: "User added: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
    console.log(newUser);
  },
  //Borrado logico a traves de isDeleted
  removeUser: (req, res) => {
    user
      .findByIdAndUpdate(req.params.id, {
        isdeleted: true,
      })
      .then((data) => res.status(204).json({ msg: "User deleted:", data }))
      .catch((err) => res.status(404).json({ msg: `Error: ${err}` }));
  },
  //Modificar un Producto por id
  updateUser: (req, res) => {

    const userID = req.params.id

    user
      .findByIdAndUpdate(userID, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email
      })
      .then((data) => res.status(201).json({ msg: "User updated:", data }))
      .catch((err) => res.status(400).json({ msg: `Error: ${err}` }));
    },
};

module.exports = controller;