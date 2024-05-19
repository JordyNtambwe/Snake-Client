let connection;

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

  if (key === "w") {
    connection.write("Move: Up");
  }

  if (key === "a") {
    connection.write("Move: Left");
  }

  if (key === "s") {
    connection.write("Move: Down");
  }
  
  if (key === "d") {
    connection.write("Move: Right");
  }

};

module.exports = setupInput;