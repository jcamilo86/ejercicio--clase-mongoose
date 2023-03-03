const { Router } = require('express')
const router = Router()
const {getStudens } = require('../controllers/film.controllers')
router.get("/students",getStudens)