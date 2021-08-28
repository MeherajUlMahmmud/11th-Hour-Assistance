import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../actions/equipmentActions";

function PostEquipmentRequestScreen({ match, history }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [location, setLocation] = useState("");
  const [neededWithin, setNeededWithin] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createRequest(
        title,
        description,
        isEmergency,
        location,
        neededWithin,
        phone,
        note
      )
    );

    history.push("/equipment-requests");
  };

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Post Equipment Request</h2>
            <ol>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Post Equipment Request</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="inner-page ">
        <div className="container">
          <div className="container col-md-8">
            <div className="content-section">
              <div className="form">
                <div className="my-5"></div>
                <form onSubmit={submitHandler}>
                  <h2 className="m-5 text-center">Post Equipment request</h2>
                  <div className="form-group m-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Request Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="form-group m-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write in Detail"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="form-group m-3">
                    <input
                      type="checkbox"
                      value={isEmergency}
                      onChange={(e) => setIsEmergency(e.target.value)}
                      title="Emergency"
                    ></input>
                    <label> Emergency</label>
                  </div>
                  <div className="form-group m-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="form-group m-3">
                    <input
                      className="form-control"
                      type="date"
                      value={neededWithin}
                      onChange={(e) => setNeededWithin(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="form-group m-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      checked={phone}
                      onChange={(e) => setPhone(e.target.checked)}
                      required
                    ></input>
                  </div>
                  <div className="form-group m-3">
                    <input
                      type="textarea"
                      className="form-control"
                      placeholder="Write Note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary m-5" type="submit">
                      Create Equipment Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PostEquipmentRequestScreen;
