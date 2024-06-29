// const express = require('express');
// const { exec } = require('child_process');
// const os = require('os'); // new
// const app = express();


// // Serve static files from the 'public' directory
// app.use(express.static(__dirname + '/public'));
// // Parse JSON bodies for POST requests
// app.use(express.json());

// // Handle POST request to execute command
// app.post('/execute-command', (req, res) => {
//     const { command } = req.body;
//     if (!command) {
//         return res.status(400).json({ error: 'Command not provided' });
//     }

//     exec(command, (error, stdout, stderr) => {
//         if (error) {
//             console.error('Command Execution Error:', error);
//             return res.status(500).json({ error: 'Error executing command' });
//         }
//         console.log('Command Output:', stdout);
//         console.error('Command Errors:', stderr);
//         res.status(200).json({ output: stdout });
//     });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
