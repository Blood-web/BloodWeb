const WebSocket = require('ws');
const fs = require('fs');
const wss = new WebSocket.Server({ port: 8080 });

// Function to broadcast a "reload" message to all connected clients
function broadcastReload() {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send('reload');
    }
  });
}

// WebSocket server to handle page reload broadcasts


// Watch a file for changes and trigger a reload
fs.watch('/var/www/html/captures/public/index.html', (event, filename) => {
  if (event === 'change') {
    broadcastReload(); // Send "reload" message to all clients
  }
});

wss.on('connection', (ws) => { // Handle WebSocket connection
  console.log('Socket - connec_success');
  
  ws.on('message', (message) => {
    // Send a message to reload the page
  if (message === 'reload') {ws.send('reload');}
});


});

console.log('Node Server (Meowzer) Active on 8080');

/*

  // ws.isAlive = true;

  // ws.ping('Pmessage',false,true);

  // ws.on('pong', () => { ws.isAlive = true;});

  // Periodic ping to keep connection alive
  const pingInterval = setInterval(() => {
    if (ws.isAlive === false) {
      ws.terminate();
      clearInterval(pingInterval);
      return;
    }

    ws.isAlive = false;
    ws.ping('', false, true);
  }, 30000); // Ping every 30 seconds


listen(8080, () => {
  console.log('Server listening on port 3000 \nWebSocket active on port 8080');
});

/*


/* EOF */
