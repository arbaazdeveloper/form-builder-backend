const express = require('express');
const app = express();
const port = 5000 || process.env.PORT;
const db=require('./db/db');
const routes=require('./routes/routes')
const cors=require('cors')

app.use(cors())
app.use(express.json());


app.use('/',routes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});