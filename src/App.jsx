import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import ResidentialPage from './Components/Pages/ResidentialPage';
import RoamPage from './Components/Pages/RoamPage';
import PersonalPage from './Components/Pages/PersonalPage';
import StarlinkCheckout from './Components/Pages/StarlinkCheckout';
import MapPage from './Components/Pages/MapPage';
import BusinessPage from './Components/Pages/BusinessPage';
import StarlinkMockPayment from './Components/Pages/StarlinkMockPayment';
const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" />
        <Route index element={<HomePage />} />
        <Route path="/residentialpage" element={<ResidentialPage />} />
        <Route path="/roamPage" element={<RoamPage />} />
        <Route path="/personalpage" element={<PersonalPage />} />
        <Route path="/starlinkcheckout" element={<StarlinkCheckout />} />
        <Route path="/mappage" element={<MapPage />} />
        <Route path="/businesspage" element={<BusinessPage />} />
        <Route path="/starlinkmockpayment" element={<StarlinkMockPayment />} />
      </Route>
    </Routes>
  );
}

export default App
