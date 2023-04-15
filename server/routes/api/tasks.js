const express = require("express");
const router= express.Router();

// import model 
const tasksModel = require("../../models/tasks");


// GET
router.get('/' , (req , res)=>{
    tasksModel.find()
        .then(items => res.json(items))
        .catch((err)=>{
            console.log(err)
        })
});


// POST
router.post('/' , (req , res)=>{
    const newTask = new tasksModel({
        title: req.body.title,
        desc: req.body.desc,
        date : req.body.date
    })

    newTask.save().then(item=> res.json(item))
});

// DELETE
router.delete('/:id' , (req , res)=>{
    tasksModel.findByIdAndDelete(req.params.id).then((item) => {
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    }).catch((error) => {
        res.status(500).send(error);
    })
});

// DELETE
router.delete('/' , (req , res)=>{
    tasksModel.deleteMany({}).then((item) => {
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    }).catch((error) => {
        res.status(500).send(error);
    })
});

module.exports = router;