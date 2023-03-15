const userBl = require('../models/usersBL');
const express = require('express');
let router = express.Router();

router.get('/', async function (req, resp) {
    let users = await userBl.getAllUsers();
    return resp.json(users);

})

router.get('/:id', async function (req, resp) {
    let id = req.params.id;
    let user = await userBl.getUser(id);
    return resp.json(user);

})

router.post('/', async function (req, resp) {
    let obj = req.body;
    let userToAdd = await userBl.addUser(obj);
    return resp.json("Created with the folowing id: " + userToAdd);

})

router.put('/:id', async function (req, resp) {
    let id = req.params.id;
    let body = req.body;
    let userToUpdate = await userBl.updateUser(id, body);
    return resp.json("Updated");

})

router.delete('/:id', async function (req, resp) {
    let id = req.params.id;
    await userBl.deleteUser(id);
    return resp.json("Deleted");

})

module.exports = router;
