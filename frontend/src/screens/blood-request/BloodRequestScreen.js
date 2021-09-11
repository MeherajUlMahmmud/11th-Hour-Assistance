import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useDispatch, useSelector } from "react-redux";
import RequestCard from "../../components/RequestCard";
import { listRequests } from "../../actions/requestActions";

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
      <section id="features" className="padd-section text-center mt-4">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h3>Blood Requests</h3>
          </div>
          {userInfo ? (
            <div className="row mb-3">
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <Link to={"/create-new-request"} className="btn btn-primary">
                  Post New request
                </Link>
              </div>
            </div>
          ) : null}
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              {blood_requests.map((req) => (
                <div className="col-md-6 col-lg-3">
                  <div
                    className="feature-block border">
                    <RequestCard req={req} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default BloodRequestScreen;
