import React from "react";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import { useSelector } from "react-redux";
import { selectEmail, selectName, select_id } from "./features/user/userSlice";
import MyData from "./MyData";

function App() {
      // const state = useSelector(selecteState);
      const _id = useSelector(select_id);
      const name = useSelector(selectName);
      const email = useSelector(selectEmail);
      return (
            <Router>
                  <div className="app">
                        <Switch>
                              <Route path="/signup">
                                    <SignUp />
                              </Route>
                              <Route path="/MyData/:id">
                                    <MyData />
                              </Route>
                              <Route exact path="/landingpage">
                                    <LandingPage _id={_id} name={name} email={email} />
                              </Route>
                              <Route path="/">
                                    <Login />
                              </Route>
                        </Switch>
                  </div>
            </Router>
      );
}

export default App;
