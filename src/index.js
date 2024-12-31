const express = require("express");

const PORT = process.env.PORT || 5000;
// Listen the server

app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT}`);
});

const app = express();
