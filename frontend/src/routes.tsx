import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Loginpage from './pages/LoginPage';
import ViewAllUsersPage from './pages/ViewAllUsersPage';
import AttendancePage from './pages/AttendancePage';
import MokwonsPage from './pages/MokwonsPage';
import AddUserPage from './pages/AddUserPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/users" element={<ViewAllUsersPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/myMokwons" element={<MokwonsPage />} />
        <Route path="/users/add" element={<AddUserPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    )
)