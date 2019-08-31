const router = require('express').Router();
const Log = require('../db').import('../models/log');
const validateSession = require('../middleware/validate-session');

router.get('/', (req, res) => {
    Log.findAll()
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//CREATE LOG
router.post('/', validateSession, (req, res) => {
    const logFromRequest = {
        nameOfLog: req.body.nameOfLog,
        descriptionOfLog: req.body.descriptionOfLog,
        definitionOfLog: req.body.descriptionOfLog,
        resultOfLog: req.body.descriptionOfLog,
        ownerOfLog: req.body.ownerOfLog
    }

Log.create(logFromRequest)
    .then(log => res.status(200).json(log))
    .catch(err => res.json(req.errors))
})

//UPDATE    
router.get('/:name', (req, res) => {
    Log.findOne({ where: { nameOfLog: req.params.nameOfLog}})
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({ error: err}))
})
router.put('/:id', (req, res) => {
    Log.update(req.body, { where: {id: req.params.id }})
    .then(log => res.status(200).json(log))
    .catch(err => res.json(req.errors))
})

//DELETE
router.delete('/:id', (req, res) => {
    log.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json(log))
    .catch(err => console.log(err))
        error: err
})

module.exports = router;