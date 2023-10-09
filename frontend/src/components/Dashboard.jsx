import React, { useState, useEffect }from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css'
import SearchBar from './SearchBar';
import JobList from './JobList';

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="header">
                <h1><b>GitHub</b> Jobs</h1>
                <div>
                    <button className='button is-light'>Log Out</button>
                </div>
            </div>
            <SearchBar />
            <JobList />
        </div>
    )
}

export default Dashboard;