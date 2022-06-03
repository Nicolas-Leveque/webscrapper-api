import express from 'express';
import cors from 'cors';
import axios from 'axios';
import cheerio from 'cheerio';

import { mondeScrapper } from './scrappers/monde-scrapper.js';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

mondeScrapper()
  .then(articles => {
    console.log(articles)
  })

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
