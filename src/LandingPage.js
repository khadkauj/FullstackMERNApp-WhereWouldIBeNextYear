import React from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = ({ _id, name }) => {
      const history = useHistory();
      const MyDataPage = () => {
            history.push(`/MyData/${_id}`);
      };

      return (
            <div className="landingpage">
                  <div onClick={MyDataPage} className="buttons">
                        <button>My Data</button>
                  </div>
                  <h3>Welcome {name}</h3>
                  <p>You will be here next Year</p>
                  <img src="https://source.unsplash.com/collection/8806655/1600x900" alt="" />
            </div>
      );
};

export default LandingPage;
