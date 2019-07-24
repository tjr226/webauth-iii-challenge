const server = require('./api/server.js');

const port = proces.env.PORT || 5000;
server.listn(port, () => console.log(`\n** Running on port ${port} **\n`));