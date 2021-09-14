import React from 'react';
import { Link } from "react-router-dom";

function EquipmentRequestCard({ req }) {
  return (
    <div>
      <h3 style={{ color: "red", fontWeight: "bold" }}>{req.title}</h3>
      <hr />
      <strong>Needed Within: {req.needed_within}</strong>
      <p style={{ color: "black", fontWeight: "bold" }}>
        Location: {req.location}
      </p>
      <p style={{ color: "black", fontWeight: "bold" }}>
        Posted: {req.posted_on}
      </p>
      <Link to={`/equipment-request/${req.id}`}>
        <p style={{ color: "blue", fontWeight: "bold" }}>See Details</p>
      </Link>
    </div>
  );
}

export default EquipmentRequestCard;
