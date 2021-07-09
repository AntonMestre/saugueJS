// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});