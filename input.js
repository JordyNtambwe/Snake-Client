let connection;

const keyMap = {

  w: 'Move: Up',
  a: 'Move: Left',
  s: 'Move: Down',
  d: 'Move: Right'

};

const handleUserInput = function (key) {

  if (key === "\u0003") {
    process.exit();
  }

  const command = keyMap[key];

  if (command) {
    connection.write(command);
  };

};

const setupInput = function (conn) {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); 
  return stdin;

};

module.exports = setupInput;