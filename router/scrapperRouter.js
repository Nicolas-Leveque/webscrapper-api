const express = require('express');

const router = express.Router()
const scrapCtrl = require('../scrappers/scrapper');

router.get('/lemonde', scrapCtrl.leMonde);
router.get('/bfmtv', scrapCtrl.bfmtv);
router.get('/20minutes', scrapCtrl.vingtMinutes);
router.get('/lefigaro', scrapCtrl.leFigaro);

module.exports = router