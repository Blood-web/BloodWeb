console.log('Good');
// const http = require('http');
// const fs = require('fs');
/*const WebSocket = require('ws');

// Create an HTTP server to serve the public/index.html file
const server = http.createServer((req, res) => {
    console.log('server'+req.url);
  if (req.url === '/captures' || req.url === '/captures/' || req.url === 'http://bloodweb.net/captures/') {
    // Serve the public/index.html file when /subdir is accessed
    fs.readFile(__dirname + 'captures/public/index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Handle other routes if needed
    res.writeHead(404);
    res.end('Not Found');
  }
});

// WebSocket server to handle page reload broadcasts
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    if (message === 'reload') {
      // When a "reload" message is received, broadcast it to all connected clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send('reload');
        }
      });
    }
  });
});

server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (ws) => {
    wss.emit('connection', ws, request);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 80');
});
*/
