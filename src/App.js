import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import HomePage from './routes/HomePage';
import NavBar from './components/NavBar';
import NotFoundPage from './routes/NotFoundPage';
import ServicesPage from './routes/ServicesPage';
import AboutPage from './routes/AboutPage';
import OurClients from './routes/OurClients';
import ContactUs from './routes/ContactUs';
import './App.css';
import Legal from './components/Legal';
import NoSurpriseAct from './components/NoSurpriseAct';

//Inner component that handles routing + analytics
function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (window.va) {
      window.va("pageview"); // track every route change
    }
  }, [location]);

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path='our-services' element={<ServicesPage />} />
        <Route path='about-us' element={<AboutPage />} />
        <Route path='our-clients' element={<OurClients />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='no-surprise-act' element={<NoSurpriseAct />} />
        <Route path='federal-legislative-update' element={<Legal />} />
      </Route>
      {/* 404 outside NavBar */}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
