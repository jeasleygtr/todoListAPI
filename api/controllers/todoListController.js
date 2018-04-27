'use strict';
var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

// List the tasks function
exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// Create the task function
exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// read a task function
exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskID, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

// update a task
exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate(
        {_id: req.params.taskID}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

//delete a task
exports.delete_a_task = function(req, res) {
    Task.remove({_id: req.params.taskId}, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted'});
    });
};