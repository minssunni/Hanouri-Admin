import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Loginpage from './pages/LoginPage';

export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/" element={<HomePage />} />
      </>
    )
)