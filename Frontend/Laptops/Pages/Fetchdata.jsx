import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Fetchdata() {
    const[data,setData]=useState([])
    useEffect(() => {
        axios.get("https://five3-beyond-pricing-laptops.onrender.com/Laptops")
        .then(res=>setData(res.data.Product))
        .catch(err=>console.log(err))
    }, [])
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gridGap:"25px", marginTop:"30px", marginLeft:"30px" }}>
        {
            data && data.map((e,index)=>{
                return(
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", border:"1px solid black", borderRadius:"10px", width:"450px", height:"500px"}} key={index}>
                        <img style={{height:"300px", width:"300px"}} src={e.image} alt="" />
                        <li>{e.Name}</li>
                        <li>{e["RAM(GB)"] || e.RAM_GB} GB</li>
                        <li>{e["ROM(GB)"] || e.ROM_GB ||e["ROM(TB)"]}</li>
                        <li>{e["RAM Type"] || e.RAM_Type}</li>
                        <li>{e["ROM Type"] || e.ROM_Type}</li>
                        <li>{e["Battery life(hrs)"] || e.Battery_hrs} hrs</li>
                        <li>{e.Operation || e.Operating_System}</li>
                        
                    </div>
                )
            })
        }
    </div>
  )
}

export default Fetchdata