import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { requestDetails, updateRequest } from "../../actions/equipmentActions";
import { EQUIPMENT_REQUEST_UPDATE_RESET } from "../../constants/equipmentConstants";

function UpdateEquipmentRequestScreen({ match, history }) {
  const requestId = match.params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEmergency, setIsEmergency] = useState(false);
  const [location, setLocation] = useState("");
  const [neededWithin, setNeededWithin] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();

  const requestData = useSelector((state) => state.equipmentRequestDetails);
  const { loading, error, request } = requestData;

  const requestUpdate = useSelector((state) => state.equipmentRequestUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = requestUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: EQUIPMENT_REQUEST_UPDATE_RESET });
      history.push(`/equipment-request/${request.id}`);
    } else {
      if (!request.title || request.id !== Number(requestId)) {
        dispatch(requestDetails(requestId));
      } else {
        setTitle(request.title);
        setDescription(request.description);
        setIsEmergency(request.is_emergency);
        setLocation(request.location);
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
        title,
        description,
        isEmergency,
        location,
        neededWithin,
        phone,
        note
      )
    );

    history.push(`/equipment-request/${request.id}`);
  };

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Update Equipment Request</h2>
            <ol>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Update Equipment Request</li>
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
                    <h2 className="m-5 text-center">
                      Update Equipment request
                    </h2>
                    <div className="form-group m-3">
                      <input
                        name="name"
                        className="form-control"
                        type="name"
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
                        placeholder="Gender"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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
                        Update Equipment Request
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

export default UpdateEquipmentRequestScreen;