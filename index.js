require("dotenv").config();
const server = require("./server");

const PORT = process.env.PORT || 5000;
server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});
server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
