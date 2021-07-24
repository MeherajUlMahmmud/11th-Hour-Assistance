import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { createRequest } from "../actions/requestActions";

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
    <div>
      <Link to="/blood-requests">Go Back</Link>

      <FormContainer>
        <h1>Post Blood Request</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="patient_name">
            <Form.Label>Patient's Name</Form.Label>
            <Form.Control
              required
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
            {/* <Form.Select>
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select> */}
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

          <Form.Group className="mb-3" controlId="isEmergency">
            <Form.Check
              type="checkbox"
              label="Emergency"
              value={isEmergency}
              onChange={(e) => setIsEmergency(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="note">
            <Form.Label>Additional Note (Optional)</Form.Label>
            <Form.Control
              type="textarea"
              rows={3}
              placeholder="Write Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button className="m-3 text-center" type="submit" variant="success">
            Post Request
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
}

export default PostRequestScreen;
