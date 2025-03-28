import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Loginpage from './pages/LoginPage';
import MokwonsPage from './pages/MokwonsPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/myMokwons" element={<MokwonsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    )
)