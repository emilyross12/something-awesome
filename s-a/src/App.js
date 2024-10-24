import "./App.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;