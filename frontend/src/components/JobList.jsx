import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import '../styles/JobList.css'

function JobList() {
  const [page, setPage] = useState(1);
  const [token, setToken] = useState('');
  const [expired, setExpired] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getJobList();
  }, []);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.response.use(async (config) => {
    const currentDate = new Date();
    if (expired * 1000 < currentDate.getTime()) {
      const res = await axios.get('http://localhost:3000/token');
      config.headers.Authorization = `Bearer ${res.data.accessToken}`;
      setToken(res.data.accessToken);
      const decoded = jwt_decode(res.data.accessToken);
      setExpired(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  const refreshToken = async () => {
    try {
      const res = await axios.get('http://localhost:3000/token');
      setToken(res.data.accessToken);
      const decoded = jwt_decode(res.data.accessToken);
      setExpired(decoded.exp);

    } catch (error) {
      console.log(error);
      if (error.response) {
        navigate.push('/')
      }
    }
  }

  const getJobList = async () => {
    try {
      const res = await axiosJWT.get('http://localhost:3000/jobs', {
        headers: { Authorization: `Bearer ${token}` },
        params: { page }
      });
      console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <p>Hello</p>
    </div>
  )
}

export default JobList;