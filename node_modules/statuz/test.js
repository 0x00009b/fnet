const app = require('express')();
const statuz = require('./index.js');
app.use('/status', statuz)
app.listen(3000, () => {
  console.log('server started');
})