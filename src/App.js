import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Analytics from './components/Pages/Analytics';
import CompanyList from './components/Pages/CompanyList';
import Customers from './components/Pages/Customers';
import Orders from './components/Pages/Orders';
import Products from './components/Pages/Products';
import Sidebar from './components/Sidebar/Sidebar';
import MainDashboard from './MainDashBord';


function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Router>
        <Sidebar />
          <Routes>
            <Route exact index path="/" element={<MainDashboard />} />
            <Route path="/orders" element={<CompanyList />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/logout"  />
      </Routes>
     </Router>
      </div>
    </div>
  );
}

export default App;
