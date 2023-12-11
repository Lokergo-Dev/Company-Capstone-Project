const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const session = require('express-session');
const axios = require('axios');


const app = express();
const port = 8090;



app.use(cors());
app.use(bodyParser.json());

app.use(session({
    secret: "token",
    resave: true,
    saveUninitialized: true
}));

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'lokergo_test',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error('Error querying MySQL:', err);
            return res.status(500).json({ auth: false, message: 'Internal Server Error' });
        }

        if (results.length > 0) {
            req.session.user = {
                user_id: results[0].id.toString(),
                user_preference: results[0].user_preference,
                user_skill: results[0].user_skill,
                user_study_level: results[0].user_study_level,
                user_loc: results[0].user_location,
            };
            req.session.save(() => {
                res.redirect('/beranda');
            });
        } else {
            res.status(401).json({ auth: false, message: 'Invalid username or password.' });
        }
    });
});

app.get('/beranda', (req, res) => {
    const userData = req.session.user;

    const apiUrl = 'https://demo-deploy-pahri-uesoclnloa-uc.a.run.app';

    // Menggunakan metode POST untuk mengirim data ke API
    axios.post(apiUrl, userData)
        .then(response => {
            res.json(response.data);
        })
        .catch(error => {
            console.error('Error sending request to API:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
