import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails } from "../actions/userActions";

function ProfileScreen() {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <div className="container">
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <div className="row mt-5">
        <div className="col-md-12 mt-5">
          <h1 className="text-center">Profile</h1>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-lg-4 text-center ">
          <div className="p-5">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="img-fluid rounded-circle"
              />
            ) : (
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt={user.name}
                className="img-fluid rounded-circle"
              />
            )}
            <Link to={"/update-profile"}>
              <button className="btn btn-primary mt-3">Update Profile</button>
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card p-3">
            <p>
              <span className="h2">Name:</span>{" "}
              <span className="h4">{userInfo.name}</span>
            </p>
            <p>
              <span className="h2">Email:</span>{" "}
              <span className="h4">{userInfo.email}</span>
            </p>
            <p>
              <span className="h2">Phone:</span>{" "}
              <span className="h4">
                {user.phone ? user.phone : "Not Specified"}
              </span>
            </p>
            <p>
              <span className="h2">Address:</span>{" "}
              <span className="h4">
                {user.address ? user.address : "Not Specified"}
              </span>
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card p-3">
            <p>
              <span className="h2">Blood Group:</span>{" "}
              <span className="h4">
                {user.blood_group ? user.blood_group : "Not Specified"}
              </span>
            </p>
            <p>
              <span className="h2">Gender:</span>{" "}
              <span className="h4">
                {user.gender ? user.gender : "Not Specified"}
              </span>
            </p>
            <p>
              <span className="h2">Date of Birth:</span>{" "}
              <span className="h4">
                {user.date_of_birth ? user.date_of_birth : "Not Specified"}
              </span>
            </p>
            <p>
              <span className="h2">Last Donation:</span>{" "}
              <span className="h4">
                {user.last_donation ? user.last_donation : "Not Specified"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
