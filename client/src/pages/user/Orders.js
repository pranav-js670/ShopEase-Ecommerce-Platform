import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";

const Orders = () => {
  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="orders-section">
              <h2 className="mb-4">Order History</h2>
              <div className="order-list">
                <p>No orders found! Start shopping today.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
