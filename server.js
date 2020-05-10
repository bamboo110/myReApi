const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const port = process.env.PORT || 4000;
const router = require('./router')


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.json({
        message: "selamat datang di API pertama saya"
    });
});


router(app);
app.listen(port, () => {
    console.log(`Server telah berjalan pada http://localhost:${port}`)
});