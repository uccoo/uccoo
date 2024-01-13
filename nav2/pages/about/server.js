const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    // In a real application, you would perform authentication here
    // This is a placeholder for demonstration purposes
    const { username, password } = req.body;
    const isValidUser = validateUser(username, password);

    if (isValidUser) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

function validateUser(username, password) {
    // Replace this with your actual authentication logic
    const validUsername = 'yin';
    const validPassword = '1010';

    return username === validUsername && password === validPassword;
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
