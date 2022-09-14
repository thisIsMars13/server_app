const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({name: "server", from: "jomar"})
})

app.listen(8080);