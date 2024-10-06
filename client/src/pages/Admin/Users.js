import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";

const Users = () => {
  return (
    <Layout title={"Admin - View All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card p-4">
              <h1 className="mb-4">All Registered Users</h1>
              <p>Below is the list of users registered on the platform.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
