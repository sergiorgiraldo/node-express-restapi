import React from 'react';
import Client from 'react-dom/client';
import './index.css';

const root = Client.createRoot(document.getElementById('root'));
const myMessagesPromise = fetch('http://localhost:8082/messages');

myMessagesPromise
	.then(data => data.json()) 
	.then(json => json.map((elem) => { 
		return 	elem.id +"  "+ elem.text +"  "+ elem.userId; })
		.join("\n"))
	.then(messages=>root.render((
		<div>        
			<pre>{messages}</pre>
		</div>)))
    .catch(err => console.log(err));


