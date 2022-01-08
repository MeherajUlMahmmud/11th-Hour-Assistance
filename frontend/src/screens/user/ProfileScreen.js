import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { getUserDetails } from "../../actions/userActions";

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

            {userInfo ? (
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
                                    src="assets/img/placeholder.jpg"
                                    alt={user.name}
                                    className="img-fluid rounded-circle"
                                />
                            )}
                            <Link to={"/update-profile"}>
                                <button className="btn btn-primary mt-3">
                                    Update Profile
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card p-3">
                            <h2 className="mb-2">Account Info</h2>
                            <hr />
                            <p className="h4 mb-2">Name: {userInfo.name}</p>
                            <p className="h4 mb-2">Email: {userInfo.email}</p>
                        </div>
                        <div className="m-3"></div>
                        <div className="card p-3">
                            <h2 className="mb-2">Personal Info</h2>
                            <hr />
                            <p className="h4 mb-2">
                                Phone:
                                {user.phone ? user.phone : "Not Specified"}
                            </p>
                            <p className="h4 mb-2">
                                Address:
                                {user.address ? user.address : "Not Specified"}
                            </p>
                            <p className="h4 mb-2">
                                Blood Group:{" "}
                                {user.blood_group
                                    ? user.blood_group
                                    : "Not Specified"}
                            </p>
                            <p className="h4 mb-2">
                                Gender:{" "}
                                {user.gender ? user.gender : "Not Specified"}
                            </p>
                            <p className="h4 mb-2">
                                Date of Birth:{" "}
                                {user.date_of_birth
                                    ? user.date_of_birth
                                    : "Not Specified"}
                            </p>
                            <p className="h4 mb-2">
                                Last Donation:{" "}
                                {user.last_donation
                                    ? user.last_donation
                                    : "Not Specified"}
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <h3>You are not logged in</h3>
            )}
        </div>
    );
}

export default ProfileScreen;
