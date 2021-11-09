const express = require ('express');

const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(server);

const path = require('path');
app.use(express.static(path.join(__dirname + '/public')));

// we are using the io.on event listener & passing socket as the arguement for callback funciton
io.on('connection', socket => {
    console.log('Some client connected');

    socket.on('chat', message => {
        //console.log('From client: ', message);
        io.emit('chat', message);
    });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});