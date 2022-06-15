const express = require('express');

const router = express.Router()
const scrapCtrl = require('../scrappers/scrapper');

router.get('/lemonde', scrapCtrl.leMonde);
router.get('/bfmtv', scrapCtrl.bfmtv);
router.get('/20minutes', scrapCtrl.vingtMinutes);
router.get('/lefigaro', scrapCtrl.leFigaro);
router.get('/franceTV', scrapCtrl.franceTV)
router.get('/france24', scrapCtrl.france24)

module.exports = router