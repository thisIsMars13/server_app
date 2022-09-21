const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
    res.status(200).json({name: "server", from: "jomar"})
})

app.listen(8080);