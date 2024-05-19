const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); 
  return stdin;

};

const handleUserInput = function (key) {


  if (key === "\u0003") {
    process.exit();
  }
  if (key === "W") {
    conn.write("Move: Up");
  }
  if (key === "A") {
    conn.write("Move: Left");
  }
  if (key === "S") {
    conn.write("Move: Down");
  }
  if (key === "D") {
    conn.write("Move: Right");
  }




};

let connection;

module.exports = setupInput;