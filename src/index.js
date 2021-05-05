import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import state from './redux/state'

let postses = [
  {id:1, comment:'Hey man, how are you?', likecounts:' 220 likes!' },
  {id:2, comment:'Hey bro, i am okay', likecounts:' 170 likes!'},
  {id:3, comment:'Saruman' , likecounts:' 180 likes!'},
  {id:4, comment:'Gandalfs Gray!' },
  {id:5, comment:'Theoden Rhokhansky' },
  {id:6, comment:'Sauron is Masster', likecounts:' 12 likes!' },
  {id:7, comment:'Erixx Stackamn', likecounts:' 23 likes!'},
  {id:8, comment:'Bebobbb' , likecounts:' 23 likes!'},
  {id:9, comment:'React~ Redux!!' },
  {id:10, comment:'Ty 3natcj bydesh kruto ' }
]

let Dialogs = [
  {id:1, name:'Vitalik' },
  {id:2, name:'Sasha' },
  {id:3, name:'Oleg' },
  {id:4, name:'Vitya' }
]

let Messages = [
  {id:1, message:'Hello everybody' },
  {id:2, message:'this is 25th lesson of react way Samurai!!' },
  {id:3, message:'I am going up!!!' },
  {id:4, message:'And weell' }
]

ReactDOM.render(
  <React.StrictMode>
    <App mypost={postses} dialogs={Dialogs} message={Messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();