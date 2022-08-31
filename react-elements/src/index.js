import React from 'react';
import ReactDOM from 'react-dom/client';

const someThing = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log('someThing', someThing);
console.log('typeof someThing', typeof someThing);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(someThing);
