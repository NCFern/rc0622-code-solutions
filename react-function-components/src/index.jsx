import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>Click here because I told you to!!!</button>;
}

const $root = document.querySelector('#root');
const root = ReactDOM.createRoot($root);
const button = <CustomButton />;

root.render(button);
