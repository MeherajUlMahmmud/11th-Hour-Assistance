import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { requestDetails, deleteRequest } from "../../actions/equipmentActions";

function EquipmentRequestDetailsScreen({ match, history }) {
  const requestId = match.params.id;
  const [isSelf, setIsSelf] = useState(false);
  const dispatch = useDispatch();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const requestData = useSelector((state) => state.equipmentRequestDetails);
  const { loading, error, request } = requestData;

  useEffect(() => {
    dispatch(requestDetails(requestId));

    if (userInfo) {
      if (userInfo.id === request.user) {
        setIsSelf(true);
      }
    }
  }, [dispatch]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      dispatch(deleteRequest(id));
      history.push(`/equipment-requests`);
    }
  };
  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Equipment Request Details</h2>
            <ol>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Equipment Request Details</li>
            </ol>
          </div>
        </div>
      </section>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <section className="inner-page ">
            <div className="container">
              {isSelf ? (
                <div className="row">
                  <div className="col-md-6"></div>
                  <div className="col-md-6">
                    <Link
                      className="btn btn-primary m-2"
                      to={`/update-equipment-request/${request.id}`}
                    >
                      Update Request
                    </Link>
                    <button
                      onClick={() => deleteHandler(request.id)}
                      className="btn btn-danger m-2"
                    >
                      Delete Request
                    </button>
                  </div>
                </div>
              ) : null}
              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-lg-8">
                      <h2
                        className="m-3"
                        style={{ color: "red", fontWeight: "bold" }}
                      >
                        {request.title}
                      </h2>
                    </div>
                    {request.is_emergency ? (
                      <div className="col-lg-3 mt-4">
                        <span
                          className="mt-3 rounded p-1"
                          style={{ backgroundColor: "#BB2D3B", color: "white" }}
                        >
                          <i class="far fa-check-circle"></i> Emergency
                        </span>
                      </div>
                    ) : null}
                  </div>
                  <h3 className="m-3">
                    Needed Within: <b>{request.needed_within}</b>
                  </h3>
                  <h3 className="m-3">
                    Location: <b>{request.location}</b>
                  </h3>
                </div>

                <div className="col-md-6">
                  <h2 className="m-3">Contact</h2>
                  <h3 className="m-3">Phone: {request.phone}</h3>

                  <h4 className="mx-3 my-5">Additional Note: {request.note}</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default EquipmentRequestDetailsScreen;