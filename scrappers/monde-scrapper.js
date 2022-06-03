import axios from 'axios';
import cheerio from 'cheerio';

const url = 'https://www.lemonde.fr/';

export async function mondeScrapper() {
  axios(url)
    .then(response => {
      const html = response.data
      const $ = cheerio.load(html);
      const result = [];
      $('.article', html).each(function () { //<-- cannot be a function expression
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
      return articles
    })
}