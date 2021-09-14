import React from "react";
import { Link } from "react-router-dom";

function RequestCard({ req }) {
  return (
    <div>
      <h2 style={{ color: "red", fontWeight: "bold" }}>{req.blood_group}</h2>
      <hr />
      <h4>{req.patient_name}</h4>
      <strong>Needed Within: {req.needed_within}</strong>
      <p style={{ color: "black", fontWeight: "bold" }}>
        Location: {req.location}
      </p>
      <p style={{ color: "black", fontWeight: "bold" }}>
        Posted: {req.posted_on}
      </p>
      <Link to={`/request/${req.id}`}>
        <p style={{ color: "blue", fontWeight: "bold" }}>See Details</p>
      </Link>
    </div>
  );
}

export default RequestCard;
