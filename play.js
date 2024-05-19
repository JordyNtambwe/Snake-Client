const net = require("net");
const Ip = "172.19.167.29"

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: Ip,
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    conn.write("you ded cuz you idled")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();