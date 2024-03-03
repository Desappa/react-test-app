import './App.css';
import { Routes, Route } from 'react-router-dom';

// import Login from './components-1/Login';
import Layout from './components-1/dashboard/Layout';
import Home from './components-1/dashboard/Home';
import Leads from './components-1/dashboard/pages/Leads';
import Orders from './components-1/dashboard/pages/Orders';
// import Customer from './components-1/dashboard/pages/Customer';
import AccountHead from './components-1/dashboard/pages/AccountHead';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/leads' element={<Leads />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/account-head' element={<AccountHead />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
