import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import axios from "axios";

const LoginForm = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ usernameError, setUsernameError ] = useState(false);
  const [ pwError, setPwError ] = useState(false);

  const navigate = useNavigate();

  async function loginUser() {
    return fetch('http://localhost:5000/healthcheck', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
   }

  const submit = async () => {
    /*if (username === '' || password === '') {
      alert('Fields cannot be empty.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be >= 8 characters.');
      return;
    }*/

    try {
      //const response = await axios.get('http://localhost:5000/users');
      const credentials = {username,password}
      const response = await loginUser()
      const response = await fetch('https://www.mecallapi.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      }).then(data => data.json())
      console.log(response);
      alert("all good")
      return navigate("/");
    } catch (error) {
      alert(error.response.data.error)
    }


  }

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1" class="label1">Email Address</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setUsername(e.target.value)}></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="label1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
        </div>
        <button type="submit" class="btn btn-primary margin10" onClick={submit}>Submit</button>
      </form>
    </div>
  );
};


export default LoginForm;