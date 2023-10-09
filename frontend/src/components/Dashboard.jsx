import React from 'react'
import '../styles/Dashboard.css'
import SearchBar from './SearchBar';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="header ">
                <h1><b>GitHub</b> Jobs</h1>
            </div>
            <SearchBar />
        </div>
    )
}

export default Dashboard