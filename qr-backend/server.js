const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const port = 3001;

app.use(cors());

io.on('connection', (socket) => {
  console.log('A user connected');
  
  socket.on('changeChapter', (data) => {
    io.emit('update', { path: data.path });
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.get('/chapter1', (req, res) => {
  io.emit('update', { path: '/chapter1' });
  res.send('Chapter 1');
});

app.get('/chapter2', (req, res) => {
  io.emit('update', { path: '/chapter2' });
  res.send('Chapter 2');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
