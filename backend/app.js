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
    host: '34.142.149.98',
    user: 'root',
    password: 'password',
    database: 'vr_db',
});

const authorizeMiddleware = (req, res, next) => {
    if (!req.session.user) {
      return res.status(401).json({ error: 'Unauthorized: Not logged in' });
    }
    next();
  };

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
            res.status(200).json({ auth: true, message: 'Login successful.' , user: req.session.user});
        } else {
            res.status(401).json({ auth: false, message: 'Invalid username or password.' });
        }
    });
});

app.get('/jobs', authorizeMiddleware, (req, res) => {
    const userData = req.session.user;

    const apiUrl = 'https://deploy-model-uesoclnloa-et.a.run.app';
    // Menggunakan metode POST untuk mengirim data ke API
    axios.post(apiUrl, userData)
        .then(response => {
            const parsedData = response.data;

            // Menghapus karakter \r\n pada key objek1
            for (const key in parsedData[1]) {
                if (Object.prototype.hasOwnProperty.call(parsedData[1], key)) {
                    const newKey = key.replace(/\r\n/g, '');
                    parsedData[1][newKey] = parsedData[1][key];
                    delete parsedData[1][key];
                }
            }

            // Menghapus karakter \r\n pada key objek2
            for (const key in parsedData[2]) {
                if (Object.prototype.hasOwnProperty.call(parsedData[2], key)) {
                    const newKey = key.replace(/\r\n/g, '');
                    parsedData[2][newKey] = parsedData[2][key];
                    delete parsedData[2][key];
                }
            }

            // Langsung mengirim objek sebagai respons JSON
            res.json(parsedData);
        })
        .catch(error => {
            console.error('Error sending request to API:', error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

