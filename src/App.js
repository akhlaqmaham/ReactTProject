import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/LoginForm';
import Register from './components/Register';
import Transporter from './components/Transporter';
import Main from './components/Main';
import Guard from './components/Guard';
import Customer from './components/Customer'
import Dispatch from './components/Dispatch'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Main />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/register" element={<Register/>}>
          </Route>
          <Route path="/transporter" element={<Transporter/>}>
          </Route>
          <Route path="/guard" element={<Guard />}>
          </Route>
          <Route path="/customer" element={<Customer />}>
          </Route>
          <Route path="/dispatch" element={<Dispatch />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
