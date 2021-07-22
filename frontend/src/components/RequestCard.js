import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function RequestCard({ req }) {
  return (
    <Card className="p-3 my-3 rounded" bg="danger" text="light">
      {/* <Link to={`/req/${req._id}`}>
          <Card.Img src={req.image} />
        </Link> */}

      <Card.Body>
        <Card.Text as="h2">
          {req.blood_group} <small>Blood</small>
        </Card.Text>

        <Link to={`/req/${req._id}`}>
          <Card.Title as="div">
            <strong>{req.patient_name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h5">At: {req.location}</Card.Text>
        <Card.Text as="p">Needed Within: {req.needed_within}</Card.Text>
        <Card.Text>Posted: {req.posted_on}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RequestCard;
