import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { requestDetails, deleteRequest } from "../actions/requestActions";

function RequestDetailsScreen({ match, history }) {
  const requestId = match.params.id;
  const [isSelf, setIsSelf] = useState(false);
  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const requestData = useSelector((state) => state.requestDetails);
  const { loading, error, request } = requestData;

  useEffect(() => {
    dispatch(requestDetails(requestId));

    if (userInfo) {
      if (userInfo.id === request.user) {
        setIsSelf(true);
      }
    }
  }, [dispatch]);

  useEffect(() => {});

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      dispatch(deleteRequest(id));
      history.push(`/blood-requests`);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row className="align-items-center">
            <Col>
              <h1>Request Details</h1>
              {/* <p>{userInfo.id} ||| {request.user}</p> */}
            </Col>

            <Col className="text-right">
              {isSelf ? (
                <div>
                  <LinkContainer to={`/update-request/${request.id}`}>
                    <Button variant="info" className="mx-3 my-3">
                      Update Request
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="mx-3 my-3"
                    onClick={() => deleteHandler(request.id)}
                  >
                    Delete Request
                  </Button>
                </div>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col lg={6} sm={12}>
              <h3 className="m-3">
                Patient:{" "}
                <b>
                  {request.patient_name} <small>({request.gender})</small>
                </b>
              </h3>
              <h5 className="m-3">
                Blood Group: <b>{request.blood_group}</b>
              </h5>
              <h5 className="m-3">
                Needed Within: <b>{request.needed_within}</b>
              </h5>
            </Col>

            <Col lg={6} sm={12}>
              <h3 className="m-3">Contact</h3>
              <h5 className="m-3">Phone: {request.phone}</h5>
              <h5 className="m-3">Email: {request.user}</h5>

              <h5 className="my-5">Additional Note: {request.note}</h5>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default RequestDetailsScreen;
