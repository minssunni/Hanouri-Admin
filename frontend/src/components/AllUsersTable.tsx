import { mokwonList } from "../mockData/draftMokwonList";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  group: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  carPlate?: string;
  emergencyContact?: string;
  dateAdded: string;
  notes?: string;
  contact?: string;
  attendanceRate?: number;
}

const ViewAllUsersPage = () => {
  const [users, setUsers] = useState<User[]>(mokwonList);

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Group</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Contact</th>
            <th>Attendance Rate</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.group}</td>
              <td>{user.gender}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.contact}</td>
              <td>{user.attendanceRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAllUsersPage;
