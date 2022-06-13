const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const scrapRouter = require('./router/scrapperRouter');

const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: '*',
  allowedHeaders: 'Content-Type, Authorization',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200,
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', scrapRouter);

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
