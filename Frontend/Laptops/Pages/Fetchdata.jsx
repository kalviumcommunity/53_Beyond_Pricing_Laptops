import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Fetchdata.css'

function Fetchdata() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState([]);
    const [selectedContinent, setSelectedContinent] = useState('');
    var URL1 ="http://localhost:3130/register" 
    var URL2= "http://localhost:3130/Laptops"
    useEffect(() => {
        axios.get("https://five3-beyond-pricing-laptops.onrender.com/register")
            .then(res => {
                if (res.data && res.data.Users && res.data.Users.length > 0) {
                    const usernames = res.data.Users.map(user => user.username);
                    const uniqueUsernames = [...new Set(usernames)];
                    setResponse(uniqueUsernames); 
                } else {
                    setError("Invalid response format");
                }
                setLoading(false);
            })
            .catch(err => {
                setError("Error fetching data: " + err.message);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        axios.get("https://five3-beyond-pricing-laptops.onrender.com/Laptops")
        // axios.get("http://localhost:3130/Laptops")
        
            .then(res => {
                setData(res.data.Product);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3130/Laptops/${id}`)
            .then(res => {
                setData(data.filter(item => item._id !== id)); // Update state instead of reloading page
            })
            .catch(err => {
                setError(err);
            });
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const handleContinentChange = (e) => {
        setSelectedContinent(e.target.value);
      };
    return (
        <>
            <Navbar />
        <select value={selectedContinent} onChange={handleContinentChange}>
            <option value="">All users</option>
            {response.map(username => (
                <option key={username} value={username}>{username}</option>
            ))}
        </select>
            <div className='box'>
            {data.filter(userdata => !selectedContinent || userdata.username === selectedContinent)
                .map((e, index) => (
                    <div className='Product' key={index}>
                        <img className='image' src={e.image} alt="" />
                        <div className='ProductData'>
                            <h2><b>Price- ₹ {e.Price}</b></h2>
                            <li>{e.Name}</li>
                            <li>{e["RAM(GB)"] || e.RAM_GB} GB</li>
                            <li>{e["ROM(GB)"] || e.ROM_GB || e["ROM(TB)"]} GB</li>
                            <li>{e["RAM Type"] || e.RAM_Type}</li>
                            <li>{e["ROM Type"] || e.ROM_Type}</li>
                            <li>{e["Battery life(hrs)"] || e.Battery_hrs} hrs</li>
                            <li>{e.Operation || e.Operating_System}</li>
                            <li>{e.Review}</li>
                            <br />
                        </div>
                        <div className='buttonDiv'>
                            <Link key={`edit-${e._id}`} to={`/edit/${e._id}`}> <button className='button'>Edit Data</button></Link>
       <button onClick={() => handleDelete(e._id)} style={{ color: "white", background: "red", border: "2px solid black", borderRadius: "6px" }}>DELETE</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Fetchdata
