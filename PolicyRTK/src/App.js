import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from './Pages/Home/Home';
import UserPage from './Pages/UserPage/UserPage';
import { UserForm } from "./Pages/UserPage/UserForm";
// import { UserTable } from "./Pages/UserPage/UserTable";
import Policy from './Pages/Policy/Policy';
import PolicyForm from "./Pages/Policy/PolicyForm";
import { PolicyTable } from "./Pages/Policy/PolicyTable";
import ClaimPolicies from './Pages/ClaimPolicies/ClaimPolicies'; 
import ClaimForm from "./Pages/ClaimPolicies/ClaimForm";
import ClaimTable from "./Pages/ClaimPolicies/ClaimTable";
import ClaimSettlement from './Pages/ClaimSettlement/ClaimSettlement';
import { UserTable } from "./Pages/UserPage/UserTable";
import backgroundImage from './Policy-Background.jpg'
// import UserTable from "./Pages/UserPage/UserTable";





class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/userform" element={<UserForm/>} />
            <Route path="/usertable" element={<UserTable />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/policyform" element={<PolicyForm />} />
            <Route path="/policytable" element={<PolicyTable />} />
            <Route path="/claimpolicy" element={<ClaimPolicies />} />
            <Route path="/claimForm" element={<ClaimForm />} />
            <Route path="/claimtable" element={<ClaimTable />} />
            <Route path="/claimsettlement" element={<ClaimSettlement />} />
            <Route path="/usecustomdata" element={<useCustomDAta />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;