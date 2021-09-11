import React from "react";

function ProfileUpdateScreen() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 m-5 text-center">
          <h1>Profile Update</h1>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <label>Blood Group</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Blood Group"
            />
          </div>

          <div className="form-group mb-3">
            <label>Gender</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Gender"
            />
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
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
            />
          </div>

          <div className="form-group mb-3">
            <label>Date of Birth</label>
            <input type="date" className="form-control" />
          </div>

          <div className="form-group mb-3">
            <label>Last Donation</label>
            <input
              type="date"
              className="form-control"
            />
          </div>
          <div className="text-center mb-5">
              <button className="btn btn-primary">Update Profile</button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default ProfileUpdateScreen;
