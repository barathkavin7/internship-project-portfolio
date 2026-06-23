const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

const PORT = 3102;

app.listen(PORT, () => {
    console.log(`Home page running on port ${PORT}`);
});

