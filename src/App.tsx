import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Pricing from "./pages/Pricing/Pricing";
import Payroll from "./pages/Payroll/Payroll";
import Performance from "./pages/Performance/Performance";
import OnBoardingModal from "./pages/OnBoarding/OnBoarding";
// import Homepage from "./pages/Homepage/Homepage";
import Attendance from "./pages/Attendance/Attendance";
import Contact from "./pages/Contact/Contact";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import Privacy from "./pages/Privacy/Privacy";
import Home from "./pages/Home/Home"


const App: React.FC = () =>{
  return (
    <Layout>
      <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/payroll"   element={<Payroll />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/performance" element={<Performance /> } />
      <Route path="/attendance" element={<Attendance />}/>
      <Route path="/get-started" element={<OnBoardingModal />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy" element={<Privacy />}/>
      </Routes>
    </Layout>
  );
}

export default App;
