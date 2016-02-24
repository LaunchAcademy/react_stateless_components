// main.js
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

let app = <div>
  <h1>Grocery List React</h1>
  <form
    onSubmit={
      event => {
        event.preventDefault();
        alert('Form was submitted');
      }
    }
  >
    <input type="text" placeholder="name of grocery" />
    <input type="submit" value="Add To List" />
  </form>
  <ul>
    <li>
      Oranges
      <button type="button" onClick={ event => alert('Button was clicked') }>Delete</button>
    </li>
    <li>
      Bananas
      <button type="button" onClick={ event => alert('Button was clicked') }>Delete</button>
    </li>
    <li>
      Bread
      <button type="button" onClick={ event => alert('Button was clicked') }>Delete</button>
    </li>
  </ul>
</div>;

ReactDOM.render(
  app,
  document.getElementById('app')
);
