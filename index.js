const dotenv = require("dotenv");
const server = require("./api/server");

dotenv.config();

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
