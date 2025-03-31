import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import ResidentialPage from './Components/Pages/ResidentialPage';
import RoamPage from './Components/Pages/RoamPage';
import PersonalPage from './Components/Pages/PersonalPage';
const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" />
        <Route index element={<HomePage />} />
        <Route path="/residentialpage" element={<ResidentialPage />} />
        <Route path="/roamPage" element={<RoamPage />} />
        <Route path="/personalpage" element={<PersonalPage />} />
      </Route>
    </Routes>
  );
}

export default App
