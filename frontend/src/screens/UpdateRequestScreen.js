import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { requestDetails, updateRequest } from "../actions/requestActions";
import { REQUEST_UPDATE_RESET } from "../constants/requestConstants";

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
    <div>
      <Link to={`/request/${request.id}`}>Go Back</Link>

      <FormContainer>
        <h1>Update Blood Request</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="patient_name">
              <Form.Label>Patient's Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Patient's Name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="blood_group">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Blood Group"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="isEmergency">
              <Form.Check
                type="checkbox"
                label="Emergency"
                value={isEmergency}
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="isActive">
              <Form.Check
                type="checkbox"
                label="Active"
                value={isActive}
                checked={isActive}
                onChange={(e) => setIsActive(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="needed_within">
              <Form.Label>Needed Within</Form.Label>
              <Form.Control
                required
                type="date"
                value={neededWithin}
                onChange={(e) => setNeededWithin(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="note">
              <Form.Label>Additional Note (Optional)</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Write Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button className="m-5 text-center" type="submit" variant="info">
              Update Request
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
}

export default UpdateRequestScreen;