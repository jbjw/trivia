import React from 'react';
import ReactDOM from 'react-dom';

import View from './index.jsx';

import { Provider } from 'react-redux'

import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'

import reducer from './reducers.js'

// const serverUrl = 'http://localhost'
// const socket = require('socket.io-client')(serverUrl)
var io = require('socket.io-client')
// import io from 'socket.io-client'
var socket = io('http://localhost:5000')


socket.on('connect', function() {
	console.log('connected')
	socket.emit('chat message', 'hi i am client')
})

socket.on('user joined', function(x) {
	console.log('dsa', x)
})

// socket.disconnect()

document.addEventListener('keypress', function (e) {
	console.log(e.key, e.char, e.keyCode, e.charCode)
	// socket.emit('move', e.key);
})

// const rootReducer = combineReducers({
// 		chats: reducer,
// 		stuff
// })

const rootReducer = reducer

const store = createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

// const store = createStore( rootReducer, applyMiddleware(thunk),
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

// connect( store )
// '/users': <UsersPage>

const props = {

}

ReactDOM.render(
	<Provider store={store}>
		<View {...props}></View>
	</Provider>,
	document.getElementById('root')
)
