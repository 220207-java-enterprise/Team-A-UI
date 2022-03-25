import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Principal } from './models/principal';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';


function App() {
  let [authUser, setAuthUser] = useState<Principal>();
  return (



    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>}/>
          <Route path="/dashboard" element={<Dashboard currentUser={authUser}/>}/>
          <Route path="/userdashboard" element={<UserDashboard currentUser={authUser}/>}/>
          <Route path="/admindashboard" element={<AdminDashboard currentUser={authUser}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
