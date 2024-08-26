const express = require('express');
const ip = require('ip');

const app = express();

app.get('/', (req, res) => {
    const serverIp = ip.address();
    return res.json({
        ping: 'Pong',
        message: serverIp
    })
});


app.listen(3000, () => {
    console.log("server is running");
});