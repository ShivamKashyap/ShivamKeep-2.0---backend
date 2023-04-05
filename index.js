const connectToMongoose = require('./db');
const express = require('express')
connectToMongoose();

const app = express()
const port = 5000

app.use(express.json());

app.use('/', require('./routes/default'));
app.use('/api/auth/', require('./routes/auth'));
app.use('/api/notes/', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Keep+ listening on port ${port}`)
})
