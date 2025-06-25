const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const cors = require('cors');
server.use(cors()); // ✅ Enable CORS

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/employees', router); // Adjust if your route is different

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
