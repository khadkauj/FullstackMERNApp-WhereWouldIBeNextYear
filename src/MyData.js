import React, { useEffect, useState } from "react";
import "./MyData.css";
import axios from "./axios";
import { useHistory, useParams } from "react-router-dom";

const MyData = () => {
      const { id } = useParams();
      const [userDetails, setuserDetails] = useState("");
      const history = useHistory();
      useEffect(() => {
            async function send_to_mongodb_login(e) {
                  const request = await axios
                        .get(`/api/user/MyData/${id}`)
                        .then((response) =>
                              setuserDetails({
                                    _id: response.data._id,
                                    name: response.data.name,
                                    email: response.data.email,
                                    // decryptedPassword: response.data.password,
                                    date: response.data.date,
                              })
                        )
                        .catch((error) => console.log("error in fetching MyData: " + error));
            }
            send_to_mongodb_login();
      }, []);
      const deleteMyData = () => {
            axios.get(`/api/user/MyData/delete/${id}`)
                  .then((response) => {
                        alert(" MyData permanently Deleted from Database.");
                        history.replace("/");
                  })
                  .catch((error) => console.log("error in deleting myData: " + error));
      };

      console.log("logging user details", userDetails);
      return (
            <div className="MyData">
                  <h3>MyData</h3>
                  <table>
                        <tbody>
                              <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    {/* <th>Decrypted Password</th> */}
                                    <th>Date Joined</th>
                                    <th>Delete MyData</th>
                              </tr>
                              <tr>
                                    <td>{userDetails.name}</td>
                                    <td>{userDetails.email}</td>
                                    {/* <td>{userDetails.decryptedPassword}</td> */}
                                    <td>{userDetails.date}</td>
                                    <td>
                                          <button onClick={deleteMyData} className="button">
                                                ❌
                                          </button>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
            </div>
      );
};

export default MyData;
