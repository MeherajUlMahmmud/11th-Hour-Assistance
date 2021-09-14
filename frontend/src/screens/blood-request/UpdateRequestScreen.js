import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { requestDetails, updateRequest } from "../../actions/requestActions";
import { REQUEST_UPDATE_RESET } from "../../constants/requestConstants";

function UpdateRequestScreen({ match, history }) {
  const requestId = match.params.id;

  const [patientName, setPatientName] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [neededWithin, setNeededWithin] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const requestData = useSelector((state) => state.requestDetails);
  const { loading, error, request } = requestData;

  // useEffect(() => {
  //   dispatch(requestDetails(requestId));
  // }, [dispatch]);

  const requestUpdate = useSelector((state) => state.requestUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = requestUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: REQUEST_UPDATE_RESET });
      history.push(`/request/${request.id}`);
    } else {
      if (!request.patient_name || request.id !== Number(requestId)) {
        dispatch(requestDetails(requestId));
      } else {
        setPatientName(request.patient_name);
        setGender(request.gender);
        setBloodGroup(request.blood_group);
        setLocation(request.location);
        setIsEmergency(request.is_emergency);
        setIsActive(request.is_active);
        setNeededWithin(request.needed_within);
        setPhone(request.phone);
        setNote(request.note);
      }
    }
  }, [dispatch, request, requestId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      updateRequest(
        request.id,
        patientName,
        gender,
        bloodGroup,
        location,
        isEmergency,
        isActive,
        neededWithin,
        phone,
        note
      )
    );

    history.push(`/request/${request.id}`);
  };

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Update Blood Request</h2>
            <ol>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Update Blood Request</li>
            </ol>
          </div>
        </div>
      </section>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <section className="inner-page ">
          <div className="container">
            <div className="container col-md-8">
              <div className="content-section">
                <div className="form">
                  <div className="my-5"></div>
                  <form onSubmit={submitHandler}>
                    <h2 className="m-5 text-center">Update Blood request</h2>
                    <div className="form-group m-3">
                      <input
                        name="name"
                        className="form-control"
                        type="name"
                        placeholder="Patient's Name"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="form-group m-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="form-group m-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Blood Group"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        required
                      ></input>
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
                        type="checkbox"
                        checked={isEmergency}
                        onChange={(e) => setIsEmergency(e.target.checked)}
                        title="Emergency"
                      ></input>
                      <label> Emergency</label>
                    </div>
                    <div className="form-group m-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        Update Blood Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default UpdateRequestScreen;
