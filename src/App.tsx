import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Principle } from './models/principal';

function App() {
  let [authUser, setAuthUser] = useState<Principle>();
  return (
    <Routes>
      <Route path="/login" element={<Login currentUser={authUser} setCurrentUser={setAuthUser}/>}/>
      <Route path="/dashboard" element={<Dashboard currentUser={authUser}/>}/>
    </Routes>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Silly google</h1>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
