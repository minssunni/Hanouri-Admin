import React, { useState } from 'react';
import AllUsersTable from '../components/AllUsersTable';
import BackButton from '../components/BackButton';

const ViewAllUsersPage = () => {

  return (
    <div>
      <BackButton />
      <AllUsersTable />
    </div>
  );
};

export default ViewAllUsersPage;