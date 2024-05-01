import React from 'react';
import "./App.css";
import axios from 'axios';

const App = () => {
  const onClickUSers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  const onClickUSer1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <button onClick={onClickUSers}>users</button>
      <button onClick={onClickUSer1}>id=1のuser</button>
    </div>
  )
};

export default App;