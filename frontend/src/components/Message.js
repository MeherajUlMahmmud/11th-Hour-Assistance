import React from "react";
import { Alert } from "react-bootstrap";

function Message({ variant, children }) {
  return (
    <div class="alert alert-{variant}" role="alert">
      {children}
    </div>
  );
}

export default Message;
