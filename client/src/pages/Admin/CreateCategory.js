import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm";
import { Modal } from "antd";

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/category/create-category", {
        name,
      });
      if (data?.success) {
        console.log(`${name} is created`);
        setCategories((prevCategories) => [
          ...prevCategories,
          { _id: data.category._id, name },
        ]);
        setName("");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Something went wrong in input form");
    }
  };

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
      console.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/category/update-category/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        console.log(`${updatedName} is updated`);
        setCategories((prevCategories) =>
          prevCategories.map((cat) =>
            cat._id === selected._id ? { ...cat, name: updatedName } : cat
          )
        );
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  //delete category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/category/delete-category/${pId}`
      );
      if (data.success) {
        console.log(`category is deleted`);
        setCategories((prevCategories) =>
          prevCategories.filter((cat) => cat._id !== pId)
        );
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Admin Dashboard - Manage Categories"}>
      <div className="container-fluid p-4 bg-light shadow-sm">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2 className="mb-4">Category Management</h2>
            <p className="text-muted mb-3">
              Add, update, or remove categories to manage the product catalog.
            </p>
            <div className="p-4 bg-white rounded shadow-sm mb-4">
              <h4 className="text-secondary mb-3">Create a New Category</h4>
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>

            <div className="bg-white rounded shadow-sm p-3">
              <h4 className="text-secondary mb-3">Existing Categories</h4>
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th scope="col">Category Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((c) => (
                    <tr key={c._id}>
                      <td>{c.name}</td>
                      <td>
                        <button
                          className="btn btn-outline-primary me-2"
                          onClick={() => {
                            setVisible(true);
                            setUpdatedName(c.name);
                            setSelected(c);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleDelete(c._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              open={visible}
              title="Edit Category"
              className="category-modal"
            >
              <CategoryForm
                value={updatedName}
                setValue={setUpdatedName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
