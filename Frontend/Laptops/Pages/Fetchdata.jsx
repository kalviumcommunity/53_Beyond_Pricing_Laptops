import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Fetchdata() {
    const[data,setData]=useState([])
    useEffect(() => {
        axios.get("https://five3-beyond-pricing-laptops.onrender.com/Laptops")
        .then(res=>{setData(res.data.Product)
        })
        .catch(err=>console.log(err))
    }, [])
    console.log(data);
    const handleDelete=(id)=>{
        axios.delete(`https://five3-beyond-pricing-laptops.onrender.com/Laptops/${id}`)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
        <Navbar/>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gridGap:"25px", marginTop:"30px", marginLeft:"30px" }}>
            {
                data && data.map((e,index)=>{
                    return(
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", border:"1px solid black", borderRadius:"10px", width:"450px", height:"auto"}} key={index}>
                            <img style={{height:"300px", width:"300px"}} src={e.image} alt="" />
                            <li>{e.Name}</li>
                            <li>{e["RAM(GB)"] || e.RAM_GB} GB</li>
                            <li>{e["ROM(GB)"] || e.ROM_GB ||e["ROM(TB)"]}</li>
                            <li>{e["RAM Type"] || e.RAM_Type}</li>
                            <li>{e["ROM Type"] || e.ROM_Type}</li>
                            <li>{e["Battery life(hrs)"] || e.Battery_hrs} hrs</li>
                            <li>{e.Operation || e.Operating_System}</li>
                            <li>{e.Review}</li>
                            <br />
                            <Link key={`edit-${e._id}`} to={`/edit/${e._id}`}> <button style={{background:"yellow", border:"2px solid black", borderRadius:"6px"}}>Edit Data</button></Link>
                            <button onClick={()=>handleDelete(e._id)} style={{color:"white",background:"red", border:"2px solid black", borderRadius:"6px"}}>DELETE</button>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Fetchdata