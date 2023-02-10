const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json(req.cookies);
});

app.get('/cookie', (req, res) => {
  if (req.query.name) {
    if (req.query.time) {
      res.cookie('name', req.query.name, {
        expires: new Date(Date.now() + Number(req.query.time)),
        httpOnly: true,
      });
    } else {
      res.cookie('name', req.query.name, { httpOnly: true, });
    }

    return res.json('Куки установлены');
  }

  res.json('Передайте query-параметры формата ?name=value для установки Cookie');
});

app.listen(3005, () => console.log('Сервер запущен на 3005 порту'));