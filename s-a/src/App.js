import "./App.css";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Home from "./Home";
import Docs from "./Docs";
import Layout from "./Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [ active, setActive ] = useState(false);
  const [ username, setUsername ] = useState('');

// </Routes><Route exact path="/" element={<Layout />}>
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home username={username} active={active} setActive={setActive}/>} />
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/docs" element={<Docs />} />
        <Route path="/admin" element={<h1>You are not supposed to be here :(</h1>}/>
        <Route path="/userGuide" element={<h1>Hi user!! Pronto is a lorem ipsum...</h1>}/>
      </Routes>
    </div>
  );
}

export default App;


/*root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/admin" element={<h1>You are not supposed to be here :(</h1>}/>
            <Route path="/userGuide" element={<h1>Hi user!! Pronto is a lorem ipsum...</h1>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);*/