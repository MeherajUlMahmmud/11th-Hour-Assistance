import React from "react";

function ProfileUpdateScreen() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 m-5 text-center">
                    <h1>Update Profile</h1>
                    <hr />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label>Blood Group</label>
                        <select className="form-control">
                            <option>Select Blood Group</option>
                            <option value={"A+"}>A+</option>
                            <option value={"A-"}>A-</option>
                            <option value={"B+"}>B+</option>
                            <option value={"B-"}>B-</option>
                            <option value={"AB+"}>AB+</option>
                            <option value={"AB-"}>AB-</option>
                            <option value={"O+"}>O+</option>
                            <option value={"O-"}>O-</option>
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label>Gender</label>
                        <select className="form-control">
                            <option>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label>Phone</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Phone Number"
                        />
                    </div>

                    <div className="form-group mb-3">
                        <label>Address</label>
                        <textarea
                            type="text"
                            rows={3}
                            className="form-control"
                            placeholder="Enter Address"
                        ></textarea>
                    </div>

                    <div className="form-group mb-3">
                        <label>Date of Birth</label>
                        <input type="date" className="form-control" />
                    </div>

                    <div className="form-group mb-3">
                        <label>Last Donation</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="text-center mb-5">
                        <button className="btn btn-primary">
                            Update Profile
                        </button>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}

export default ProfileUpdateScreen;
