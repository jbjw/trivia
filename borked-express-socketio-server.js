'use strict';
// const server = require('http').createServer()
const url = require('url')
const express = require('express')
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(5000);

// const io = socketio(httpServer)

// http.listen(3000, function() {
// 	console.log(`listening on ${http.address().port}`)
// })

io.on('connection', function(socket) {
	console.log('a user connected')

	socket.on('chat message', function(x) {
		console.log('chat msg recvd', x)
	})

	socket.on('disconnect', function(x) {
		console.log('user disconnected', x)
	})
})

// path.resolve(APP_DIR, 'main.jsx'),
// app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.static('dist'))
//
// app.use(function (req, res) {
// 	console.log('req')
// 	res.send({ msg: "hello" })
// });

// server.on('request', app);

// const SocketIO = require('socket.io')
// const socketServer = SocketIO()
// const nsp = SocketIO('/test')

// io.emit vs io.sockets.emit
// list all sockets
// io.sockets

// nsp.on('connection', function(socket) {
//
// 	nsp.emit('message', {msg: 'welcome to da server'})
//
// 	socket.on('direct message', function (from, msg) {
// 		console.log('I received a private message by ', from, ' saying ', msg);
// 	})
//
// 	socket.on('disconnect', function () {
// 		console.log(`{socket} disconnected`)
// 		nsp.emit('user disconnected');
// 	})
// })

// socketServer.on('connection', function(socket) {
//
// 	socketServer.emit('message', {msg: 'welcome to da server'})
//
// 	socket.on('direct message', function (from, msg) {
// 		console.log('I received a private message by ', from, ' saying ', msg);
// 	})
//
// 	socket.on('disconnect', function () {
// 		console.log(`{socket} disconnected`)
// 		socketServer.emit('user disconnected');
// 	})
// })
