import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<NavBar />}>
          <Route index element={<HomePage />}/>
          <Route path='*' element={<NotFoundPage />}/>
          <Route path='our-services' element={<ServicesPage />}/>
          <Route path='about-us' element={<AboutPage />}/>
          <Route path='our-clients' element={<OurClients />}/>
          <Route path='contact-us' element={<ContactUs />}/>
          <Route path='no-surprise-act' element={<NoSurpriseAct />}/>
          <Route path='federal-legislative-update' element={<Legal />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
