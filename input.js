let connection;

const handleUserInput = function (key) {

  if (key === "\u0003") {
    process.exit();
  }

  const keyMap = {

  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  1: "Say: Good Game!",
  2: "Say: That's it!?",
  3: "Say: Hummy!",
  4: "Say: Next Time!"

};

  const command = keyMap[key];
  
  if (command) {
    connection.write(command);
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

//EXPORT
module.exports = setupInput;
