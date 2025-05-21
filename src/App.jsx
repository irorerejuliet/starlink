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
import BuyersGuide from './Components/Pages/BuyersGuide';
import OrderMobility from './Components/Pages/OrderMobility';
import OrderMaritemi from './Components/Pages/OrderMaritemi';
import SpacexNavyStarlink from './Components/Pages/SpacexNavyStarlink';
import Register from './Components/Pages/Auth/Register';
import Login from './Components/Pages/Auth/Login';
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
        <Route path="/buyersguide" element={<BuyersGuide />} />
        <Route path="/ordermobility" element={<OrderMobility />} />
        <Route path="/ordermaritemi" element={<OrderMaritemi />} />
        <Route path="/spacexnavystarlink" element={<SpacexNavyStarlink />} />
        <Route path="/auth">
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App
