const axios = require('axios');
const cheerio = require('cheerio');
const res = require('express/lib/response');


exports.leMonde = async (req, res) => {

  try {
    const url = 'https://www.lemonde.fr/';
    axios(url)
      .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const result = [];
        $('.article', html).each(function () {
          const title = $(this).find('p').text()
          const url = $(this).find('a').attr('href')
          let image = $(this).find('img').attr('src')
          if (!image) {
            image = "https://i.goopics.net/ixl813.jpg"
          }
          if (url && title !== '' || undefined) {
            result.push({
              title,
              url,
              image
            })
          }

        })
        res.status(200).send(result)
      })
  } catch (e) {
    res.status(400).send('error')
  }
}

exports.bfmtv = (req, res) => {

  try {
    const url = 'https://www.bfmtv.com/';
    axios(url)
      .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const result = [];
        $('article', html).each(function () {
          const title = $(this).find('a').attr('title')
          const url = $(this).find('a').attr('href')
          let image = $(this).find('img').attr('src')
          if (!image) {
            image = "https://i.goopics.net/2zuepf.jpg"
          }
          if (url && title !== '' || undefined) {
            result.push({
              title,
              url: 'https://www.bfmtv.com' + url,
              image
            })
          }
        })
        res.status(200).send(result)
      })
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}

exports.vingtMinutes = (req, res) => {

  try {
    const url = 'https://www.20minutes.fr/';
    axios(url)
      .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const result = [];
        $('article', html).each(function () {
          const title = $(this).find('h2').text()
          let url = $(this).find('a').attr('href')
          let image = $(this).find('img').attr('src')
          if (!image || !image.match(/^http/g)) {
            image = "https://i.goopics.net/6hfdkb.jpg"
          }
          if (!url.match(/^http/g)) {
            url = 'https://www.20minutes.fr' + url
          }

          if (url && title !== '' || undefined) {
            result.push({
              title,
              url,
              image
            })
          }

        })
        res.status(200).send(result)
      })
  } catch (e) {
    res.status(400).send(e)
  }
}

exports.leFigaro = (req, res) => {

  try {
    const url = 'https://www.lefigaro.fr/';
    axios(url)
      .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const result = [];
        $('article', html).each(function () {
          const title = $(this).find('h2').text()
          let url = $(this).find('a').attr('href')
          let image = $(this).find('img').attr('src')
          if (!image) {
            image = "https://i.goopics.net/927yly.jpg"
          }
          if (!url.match(/^http/g)) {
            url = 'https://www.20minutes.fr' + url
          }
          if (url && title !== '' || undefined) {
            result.push({
              title,
              url,
              image
            })
          }

        })
        res.status(200).send(result)
      })
  } catch (e) {
    res.status(400).send(e)
  }
}

exports.franceTV = (req, res) => {

  try {
    const url = 'https://www.francetvinfo.fr/';
    axios(url)
      .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const result = [];
        $('article', html).each(function () {
          const title = $(this).find('a.title').text()
          let url = $(this).find('a.title').attr('href')
          let image = $(this).find('img').attr('src')
          if (!image || !image.match(/^http/g)) {
            image = "https://i.goopics.net/ty031d.png"
          }

          if (url && title !== '' || undefined) {
            if (!url.match(/^http/g)) {
              url = 'https://www.francetvinfo.fr' + url
            }
            result.push({
              title,
              url,
              image
            })
          }

        })
        res.status(200).send(result)
      })
  } catch (e) {
    res.status(400).send(e)
  }
}

exports.france24 = async (req, res) => {

  try {
    const url = 'https://www.france24.com/fr/';
    axios(url)
      .then(response => {
        const html = response.data
        const $ = cheerio.load(html);
        const result = [];
        $('.m-item-list-article', html).each(function () {
          const title = $(this).find('p').text()
          const url = $(this).find('a').attr('href')
          let image = $(this).find('img').attr('src')
          if (!image || !image.match(/^http/g)) {
            image = "https://i.goopics.net/pwb903.jpg"
          }
          if (url && title !== '' || undefined) {
            result.push({
              title,
              url: 'https://www.france24.com' + url,
              image
            })
          }

        })
        res.status(200).send(result)
      })
  } catch (e) {
    res.status(400).send('error')
  }
}