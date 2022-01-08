import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createRequest } from "../../actions/requestActions";

function PostRequestScreen({ match, history }) {
    const [patientName, setPatientName] = useState("");
    const [gender, setGender] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [location, setLocation] = useState("");
    const [isEmergency, setIsEmergency] = useState(false);
    const [neededWithin, setNeededWithin] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createRequest(
                patientName,
                gender,
                bloodGroup,
                location,
                isEmergency,
                neededWithin,
                phone,
                note
            )
        );

        history.push("/blood-requests");
    };

    return (
        <main id="main">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Post Blood Request</h2>
                        <hr />
                        <ol>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>Post Blood Request</li>
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
                                    <h2 className="m-5 text-center">
                                        Post Blood request
                                    </h2>
                                    <div className="form-group m-3">
                                        <label>Patient's Name</label>
                                        <input
                                            name="name"
                                            className="form-control"
                                            type="name"
                                            placeholder="Patient's Name"
                                            onChange={(e) =>
                                                setPatientName(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="form-group m-3">
                                        <label>Gender</label>
                                        <select
                                            className="form-control"
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                            required
                                        >
                                            <option>Select Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group m-3">
                                        <label>Blood Group</label>
                                        <select
                                            className="form-control"
                                            onChange={(e) =>
                                                setBloodGroup(e.target.value)
                                            }
                                            required
                                        >
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
                                    <div className="form-group m-3">
                                        <label>Location</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Location"
                                            onChange={(e) =>
                                                setLocation(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="form-group m-3">
                                        <label>Needed Within</label>
                                        <input
                                            className="form-control"
                                            type="date"
                                            onChange={(e) =>
                                                setNeededWithin(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="form-group m-3">
                                        <input
                                            type="checkbox"
                                            onChange={(e) =>
                                                setIsEmergency(e.target.value)
                                            }
                                            title="Emergency"
                                        ></input>
                                        <label>Emergency</label>
                                    </div>
                                    <div className="form-group m-3">
                                        <label>Contact No.</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone Number"
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="form-group m-3">
                                        <label>Note</label>
                                        <textarea
                                            type="textarea"
                                            rows={10}
                                            className="form-control"
                                            placeholder="Write Note"
                                            onChange={(e) =>
                                                setNote(e.target.value)
                                            }
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-primary m-5"
                                            type="submit"
                                        >
                                            Create Blood Request
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

export default PostRequestScreen;
