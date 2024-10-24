import React, { useState } from "react";
import "./Form.css";

const LoginForm = () => {
  const submit = () => {
    alert("Thank you!");
  }

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1" class="label1">Email Address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="label1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
        </div>
        <button type="submit" class="btn btn-primary margin10" onClick={submit}>Submit</button>
      </form>
    </div>
  );
};


export default LoginForm;