import styles from "../styles/AddUserPage.module.css";
import AddUserForm from "../components/AddUserForm";
import BackButton from "../components/BackButton";

const AddUserPage = () => {
  return (
    <div>
      <BackButton />
      <div className={styles.addUserPage}>
        <h1>Add User</h1>
        <AddUserForm />
      </div>
    </div>
  );
};

export default AddUserPage;
