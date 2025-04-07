import React from "react";
import styles from "../styles/AddUserPage.module.css"
import AddUserForm from "../components/AddUserForm";

const AddUserPage = () => {
  return (
    <div className={styles.addUserPage}>
      <h1>Add User</h1>
      <AddUserForm />
    </div>
  );
};

export default AddUserPage;
