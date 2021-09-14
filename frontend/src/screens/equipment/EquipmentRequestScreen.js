import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useDispatch, useSelector } from "react-redux";
import EquipmentRequestCard from "../../components/EquipmentRequestCard";
import { listEquipmentRequests } from "../../actions/equipmentActions";

function EquipmentRequestScreen() {
  const dispatch = useDispatch();
  const equipmentRequestList = useSelector(
    (state) => state.equipmentRequestList
  );

  const { error, loading, equipment_requests } = equipmentRequestList;

  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    dispatch(listEquipmentRequests());
  }, [dispatch]);

  return (
    <div>
      <section id="features" className="padd-section text-center mt-4">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center">
            <h3>Equipment Requests</h3>
          </div>
          {userInfo ? (
            <div className="row mb-3">
              <div className="col-lg-4"></div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <Link
                  to={"/create-new-equipment-request"}
                  className="btn btn-primary"
                >
                  Post New Equipment Request
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
              {equipment_requests.map((req) => (
                <div className="col-md-6 col-lg-3">
                  <div className="feature-block border">
                    <EquipmentRequestCard req={req} />
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

export default EquipmentRequestScreen;
