import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Analytics from './components/Pages/Analytics';
import CompanyList from './components/Pages/CompanyList';
import Customers from './components/Pages/Customers';
import Orders from './components/Pages/Orders';
import Products from './components/Pages/Products';
import Sidebar from './components/Sidebar/Sidebar';
import MainDashboard from './MainDashBord';


function App() {
  return (
    <Router>
    <div className="App">
      <div className='AppGlass'>     
      <Header />   
        <Sidebar />
          <Routes>
            <Route exact index path="/" element={<MainDashboard />} />
            <Route path="/orders" element={<CompanyList />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/logout"  />
      </Routes>
    
      </div>
    </div>
    </Router>
  );
}

export default App;
