const mongoose = require('mongoose');
let userSchema = new mongoose.Schema(
    {
        Name: String,
        Email: String,
        Street: String,
        City: String,
        Zipcode: String,
        Tasks: [{ TaskID: Number, TaskTitle: String, Completed: String }],
        Posts: [{ PostID: Number, PostTitle: String, Body: String }]

    }
);

module.exports = mongoose.model('users', userSchema)