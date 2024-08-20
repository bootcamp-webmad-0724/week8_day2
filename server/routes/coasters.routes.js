const router = require("express").Router()

const Coaster = require('./../models/Coaster.model')

const isAutehnticated = require('./../middleware/verifyToken')

router.get("/", (req, res, next) => {

  Coaster
    .find()
    .select({ title: 1, imageUrl: 1, owner: 1 })
    .sort({ title: 1 })
    .then(response => res.json(response))
    .catch(err => next(err))
})


router.get("/:coaster_id", (req, res, next) => {

  const { coaster_id } = req.params

  Coaster
    .findById(coaster_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})


router.post("/", isAutehnticated, (req, res, next) => {

  const { title, description, length, inversions, imageUrl } = req.body
  const { _id } = req.payload

  Coaster
    .create({ title, description, length, inversions, imageUrl, owner: _id })
    .then(() => res.sendStatus(201))
    .catch(err => next(err))
})

module.exports = router