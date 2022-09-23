const http = require("http")
const dotenv = require("dotenv")
dotenv.config()

const app = require("./app");
// const invoicesRouter = require("./routes/invoices/invoices.routes");
// const api = require("./routes/api");

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
