import "./App.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
import React from 'react';
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Home = (props) => {
  const { active, username } = props;
  const navigate = useNavigate();

  const logInOut = () => {
    alert('Okay');
  }

  return (
    <div className="App">
      <Layout />
      <Header />
      <div>
        <button onClick={logInOut}>{active ? 'Log Out' : 'Log In'}</button>
      </div>
      <div className="main">
        <h1>Welcome home! You are logged in :)</h1>
      </div>
    </div>
  );
}

export default Home;