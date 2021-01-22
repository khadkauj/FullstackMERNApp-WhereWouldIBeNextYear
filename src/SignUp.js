import React, { useState } from "react";
import "./Login.css";
import axios from "./axios";
import { useHistory } from "react-router-dom";
const SignUp = () => {
      const [name, setname] = useState("");
      const [email, setemail] = useState("@gmail.com");
      const [password, setpassword] = useState("");
      const history = useHistory();
      async function send_to_mongoDB() {
            const request = await axios
                  .post("/api/user/register", {
                        name,
                        email,
                        password,
                  })
                  .then((response) => {
                        {
                              if (!response.data) {
                                    alert("Incomplete Details, Please Try Again.");
                              } else {
                                    alert("Successfully Signed Up");
                                    history.push("/");
                              }
                        }
                  })
                  .catch((error) => console.log("error from register " + error));
      }

      return (
            <div className="main">
                  <h1>Sign Up</h1>
                  <hr />
                  <h3>Welcome to SignUp page</h3>
                  <input
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        type="text"
                        placeholder="Name"
                        required
                  />
                  <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        required
                  />
                  <input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                  />
                  <button onClick={send_to_mongoDB} type="submit">
                        Sign Up
                  </button>
            </div>
      );
};

export default SignUp;
