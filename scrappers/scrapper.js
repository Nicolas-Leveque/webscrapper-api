const axios = require('axios');
const cheerio = require('cheerio');
const res = require('express/lib/response');


exports.leMonde = async (req, res) => {

  console.log('test1')
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
          const image = $(this).find('img').attr('src')

          result.push({
            title,
            url,
            image
          })

        })
        const articles = result.filter(article => article.url && article.title !== '' || undefined)
        res.status(200).send(articles)
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
          const image = $(this).find('img').attr('src')

          result.push({
            title,
            url,
            image
          })
        })
        const articles = result.filter(article => article.url && article.title !== '' || undefined)
        res.status(200).send(articles)
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
          const url = $(this).find('a').attr('href')
          const image = $(this).find('img').attr('src')

          result.push({
            title,
            url,
            image
          })

        })
        const articles = result.filter(article => article.url && article.title !== '' || undefined)
        res.status(200).send(articles)
      })
  } catch (e) {
    res.status(400).send(e)
  }
}