import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Login.css";
import axios from "./axios";
import { Log_in } from "./features/user/userSlice";
const Login = () => {
      const [email, setemail] = useState("@gmail.com");
      const [password, setpassword] = useState("");
      const dispatch = useDispatch();
      const history = useHistory();
      async function send_to_mongodb_login(e) {
            e.preventDefault();
            await axios
                  .post("/api/user/login", { email, password })
                  .then((response) => {
                        console.log(response.data);
                        if (response.data) {
                              alert("succes in login ");
                              dispatch(
                                    Log_in({
                                          _id: response.data._id,
                                          name: response.data.name,
                                          email: response.data.email,
                                    })
                              );
                              history.push("/landingpage");
                        } else {
                              alert("Invalid Details");
                        }
                  })
                  .catch((error) => console.log("error in login " + error));
      }
      return (
            <div className="main">
                  <h1>Login</h1>
                  <hr />
                  <h3>Welcome to Login page</h3>
                  <input value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" />
                  <input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                  />
                  <p>
                        Not a member?
                        <Link to="/signup">
                              <span className="span">
                                    <u>Register</u>
                              </span>
                        </Link>
                  </p>
                  <button onClick={send_to_mongodb_login} type="submit">
                        Log In
                  </button>
            </div>
      );
};

export default Login;
