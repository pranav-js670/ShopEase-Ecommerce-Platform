import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"User Dashboard"}>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="dashboard-info card p-4 shadow-sm">
              <h3 className="card-title mb-3">Welcome, {auth?.user?.name}!</h3>
              <div className="card-body">
                <p>
                  <strong>Email: </strong> {auth?.user?.email}
                </p>
                <p>
                  <strong>Address: </strong>{" "}
                  {auth?.user?.address || "No Address Provided"}
                </p>
                <button className="btn btn-primary mt-3">Update Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
