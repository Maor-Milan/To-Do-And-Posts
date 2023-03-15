const User = require('../models/usersModel');

const getAllUsers = async () => {
    let data = await User.find({});
    return data;
}

const getUser = async (id) => {
    let data = await User.findById(id);
    return data;
}

const addUser = async (obj) => {
    let userToAdd = new User({
        Name: obj.Name,
        Email: obj.Email,
        Street: obj.Street,
        City: obj.City,
        Zipcode: obj.Zipcode,
        Tasks: obj.Tasks,
        Posts: obj.Posts
    });

    await userToAdd.save();
    return userToAdd._id;
}

const updateUser = async (id, obj) => {
    await User.findByIdAndUpdate(id, {
        Name: obj.Name,
        Email: obj.Email,
        Street: obj.Street,
        City: obj.City,
        Zipcode: obj.Zipcode,
        Tasks: obj.Tasks,
        Posts: obj.Posts
    })

}

const deleteUser = async (id) => {
    await User.findByIdAndDelete(id);

}



module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser }
