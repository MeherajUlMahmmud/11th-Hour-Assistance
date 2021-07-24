import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import RequestCard from "../components/RequestCard";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listRequests } from "../actions/requestActions";

function BloodRequestScreen() {
  const dispatch = useDispatch();
  const requestList = useSelector((state) => state.requestList);

  const { error, loading, blood_requests } = requestList;

  const userInfo = localStorage.getItem("userInfo");

  
  useEffect(() => {
    dispatch(listRequests());
  }, [dispatch]);

  return (
    <div>
      <Row className="align-items-center">
        <Col>
          <h1>Recent blood requests</h1>
        </Col>

        <Col className="text-right">
          {userInfo ? <LinkContainer to="/create-new-request">
            <Button className="my-3" variant="dark">Post New Request</Button>
          </LinkContainer> : null}
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {blood_requests.map((req) => (
              <Col key={req.id} sm={12} md={6} lg={4} xl={3}>
                <RequestCard req={req} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}

export default BloodRequestScreen;
