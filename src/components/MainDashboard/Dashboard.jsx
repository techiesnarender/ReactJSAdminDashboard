import React from 'react'
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='MainDash'>
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    )
}

export default Dashboard;