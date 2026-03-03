const { execFile } = require('child_process');

function pingServer(userIP) {
  // Basic validation (extra protection)
  const ipRegex = /^(?:\d{1,3}\.){3}\d{1,3}$/;

  if (!ipRegex.test(userIP)) {
    console.error("Invalid IP address");
    return;
  }

  execFile('ping', ['-c', '4', userIP], (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    console.log(stdout);
  });
}
